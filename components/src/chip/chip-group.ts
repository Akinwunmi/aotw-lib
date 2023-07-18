import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, queryAssignedElements } from 'lit/decorators.js';

import styleChipGroup from './chip-group.scss?inline';
import { AotwChip } from './chip';

const AOTW_CHIP_GROUP = 'aotw-chip-group';

@customElement(AOTW_CHIP_GROUP)
export class AotwChipGroup extends LitElement {
  @queryAssignedElements()
  private chips!: AotwChip[];
  
  public static override styles = unsafeCSS(styleChipGroup);

  protected override render(): TemplateResult {
    return html`
      <slot @slotchange=${this.onSlotChange.bind(this)}></slot>
    `;
  }

  private onSlotChange(): void {
    this.chips.forEach(chip => chip.addEventListener('click', this.setActive.bind(this, chip)));
  }

  private setActive(selectedChip: AotwChip): void {
    if (!this.chips) {
      return;
    }

    this.chips.forEach(chip => chip.toggleAttribute('active', false));
    this.chips.find(chip => chip === selectedChip)?.toggleAttribute('active', true);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    AOTW_CHIP_GROUP: AotwChipGroup
  }
}
