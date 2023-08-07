import { LitElement, TemplateResult, html } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';
import { Overlay } from './overlay';
import { Positions, Side, StartingPoint } from './overlay-position.model';
import { OverlayRef } from './overlay-ref';

const AOTW_OVERLAY_TRIGGER = 'aotw-overlay-trigger';

@customElement(AOTW_OVERLAY_TRIGGER)
export class AotwOverlayTrigger extends LitElement {
  @property({ type: Boolean, reflect: true })
  public open = false;

  @property({ type: Boolean, reflect: true })
  public scrim = true;

  @property({ type: String, reflect: true })
  public side: Side = 'bottom';

  @property({ type: String, attribute: 'starting-point', reflect: true })
  public startingPoint: StartingPoint = 'start';

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
    const positions: Positions = {
      relative: {
        side: this.side,
        startingPoint: this.startingPoint
      }
    };
    const position = this.overlay.position().setOrigin(this).setPositions(positions);
    this.overlayRef = this.overlay.create({
      onScrimTriggered: this.closePopover,
      position,
      scrim: this.scrim
    });
    this.overlayRef?.open(this.popover);
    return this.overlayRef;
  }

  private openPopover(event?: Event): void {
    event?.stopPropagation();
    this.overlayRef?.close();
    this.overlayRef = this.create();
    this.open = true;
  }

  private closePopover(): void {
    this.overlayRef?.close();
    this.overlayRef?.detach();
    this.open = false;
    console.log('close popover ==> is open:', this.open);
  }

  public toggle(): void {
    console.log('==> is open', this.open);
    if (this.open) {
      this.closePopover();
      console.log('toggle closed ==> is open:', this.open);
      return;
    }
    this.openPopover();
    console.log('toggle opened ==> is open:', this.open);
  }

  public onSlotChange(): void {
    this.popover.style.display = 'none';
  }

  /* Lifecycle methods */
  public override connectedCallback(): void {
    super.connectedCallback();
    this.triggers.forEach(trigger => {
      this.removeEventListener(trigger, this.toggle.bind(this));
      this.addEventListener(trigger, this.toggle.bind(this));
    });
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
