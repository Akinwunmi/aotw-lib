import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';

import styleChip from './chip.scss';

const AOTW_CHIP = 'aotw-chip';

@customElement(AOTW_CHIP)
export class AotwChip extends LitElement {
  @property({ type: Boolean })
  public active = false;

  @property({ type: Boolean })
  public disabled = false;

  @property({ type: String, reflect: true })
  public size: 'small' | 'medium' = 'small';

  @queryAssignedElements()
  private _elements!: HTMLElement[];

  public static override styles = unsafeCSS(styleChip);

  protected override firstUpdated(): void {
    const suffix = this._elements.find(element => element.getAttribute('suffix') === '');
    suffix?.addEventListener('click', this._removeChipElement);
  }

  protected override render(): TemplateResult {
    return html`
      <slot></slot>
    `;
  }

  private _removeChipElement(e: Event): void {
    e.stopPropagation();
    const chipToRemove = new CustomEvent<this>('chipToRemove', {
      detail: this
    });
    this.dispatchEvent(chipToRemove);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    AOTW_CHIP: AotwChip
  }
}
