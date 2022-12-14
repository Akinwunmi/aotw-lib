import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, queryAssignedElements } from 'lit/decorators.js';

import styleChipGroup from './chip-group.scss';
import { AotwChip } from './chip';

const AOTW_CHIP_GROUP = 'aotw-chip-group';

@customElement(AOTW_CHIP_GROUP)
export class AotwChipGroup extends LitElement {
  @queryAssignedElements()
  private _chips!: AotwChip[];
  
  public static override styles = unsafeCSS(styleChipGroup);

  protected override firstUpdated(): void {
    this._chips.forEach(chip => chip.addEventListener('click', this._setActive.bind(this, chip)));
  }

  protected override render(): TemplateResult {
    return html`
      <slot></slot>
    `;
  }

  private _setActive(selectedChip: AotwChip): void {
    if (!this._chips) return;
    
    this._chips.forEach(chip => chip.toggleAttribute('active', false));
    this._chips.find(chip => chip === selectedChip)?.toggleAttribute('active', true);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    AOTW_CHIP_GROUP: AotwChipGroup
  }
}
