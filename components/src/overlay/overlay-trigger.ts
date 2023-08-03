import { LitElement, TemplateResult, html } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import { Overlay } from './overlay';
import { OverlayRef } from './overlay-ref';

const AOTW_OVERLAY_TRIGGER = 'aotw-overlay-trigger';

@customElement(AOTW_OVERLAY_TRIGGER)
export class AotwOverlayTrigger extends LitElement {
  @property({ type: Boolean, reflect: true })
  public scrim = true;

  @property({ type: Boolean, reflect: true })
  public open = false;

  @property({ type: Array, reflect: true })
  public triggers = ['click'];

  @queryAssignedElements()
  private elements!: HTMLElement[];

  private overlay = Overlay.get();
  private overlayRef?: OverlayRef;

  public get popover(): HTMLElement {
    return this.elements[1];
  }

  /* Methods */
  public create(): OverlayRef {
    if (this.elements.length < 2 || this.elements.length > 2) {
      throw new Error('Provide one trigger element and one popover element');
    }

    if (!this.popover) {
      throw new Error('A popover must exist');
    }

    this.overlayRef?.close();
    this.open = true;
    this.overlayRef = this.overlay.create({
      onScrimTriggered: this.closePopover,
      scrim: this.scrim
    });
    this.overlayRef?.attach(this.popover);
    return this.overlayRef;
  }

  private openPopover(event?: Event): OverlayRef {
    event?.stopPropagation();
    this.overlayRef?.close();
    this.open = true;
    this.overlayRef = this.create();

    return this.overlayRef;
  }

  private closePopover(): void {
    this.overlayRef?.close();
    this.overlayRef?.detach();
    this.open = false;
  }

  public toggle(): void {
    if (this.open) {
      this.closePopover();
      return;
    }
    this.openPopover();
  }

  public onSlotChange(): void {
    // if (this.open) {
    //   this.openPopover();
    // }
  }

  /* Lifecycle methods */
  public override connectedCallback(): void {
    super.connectedCallback();
    this.triggers.forEach(trigger => {
      this.removeEventListener(trigger, this.toggle.bind(this));
      this.addEventListener(trigger, this.toggle.bind(this));
    });
    // if (this.open) {
    //   this.openPopover();
    // }
  }

  public render(): TemplateResult {
    return html`
      <slot @slotchange=${this.onSlotChange.bind(this)}></slot>
    `;
  }

  public override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.closePopover();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    AOTW_OVERLAY_TRIGGER: AotwOverlayTrigger
  }
}
