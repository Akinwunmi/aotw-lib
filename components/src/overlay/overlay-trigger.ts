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

  private openPopover(): void {
    this.open = true;
    this.overlayRef = this.create();
  }

  private closePopover(): void {
    this.overlayRef?.detach();
    this.open = false;
  }

  private toggle(): void {
    if (this.open) {
      this.closePopover();
      return;
    }
    this.openPopover();
  }

  private onSlotChange(): void {
    this.popover.style.display = 'none';
  }

  /* Lifecycle methods */
  public override connectedCallback(): void {
    super.connectedCallback();
    this.triggers.forEach(trigger => {
      this.removeEventListener(trigger, this.toggle);
      this.addEventListener(trigger, this.toggle);
    });
  }

  public override render(): TemplateResult {
    return html`
      <slot @slotchange=${this.onSlotChange.bind(this)}></slot>
    `;
  }

  public override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.closePopover();
    this.triggers.forEach(trigger => {
      this.removeEventListener(trigger, this.toggle.bind(this));
    });
  }
}

declare global {
  interface HTMLElementTagNameMap {
    AOTW_OVERLAY_TRIGGER: AotwOverlayTrigger
  }
}
