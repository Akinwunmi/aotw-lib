import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import styleChip from './chip.scss';

const AOTW_CHIP = 'aotw-chip';

@customElement(AOTW_CHIP)
export class ChipElement extends LitElement {
  @property({ type: Boolean })
  public active = false;

  @property({ type: Boolean })
  public disabled = false;

  static override styles = unsafeCSS(styleChip);

  public override render(): TemplateResult {
    const classes = {
      active: this.active,
      disabled: this.disabled
    };

    return html`
      <button
        class="chip ${classMap(classes)}"
        part="button"
        @click=${this.toggleActive}
      >
        <slot name="prefix"></slot>
        <slot></slot>
        <slot name="suffix" @click=${this.removeChipElement}></slot>
      </button>
    `;
  }

  private toggleActive(): void {
    if (!this.disabled) {
      const onClick = new CustomEvent<boolean>('onClick', {
        detail: (this.active = !this.active)
      });
      this.dispatchEvent(onClick);
    }
  }

  private removeChipElement(e: Event): void {
    e.stopPropagation();
    const chipToRemove = new CustomEvent<this>('chipToRemove', {
      detail: this
    });
    this.dispatchEvent(chipToRemove);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    AOTW_CHIP: ChipElement
  }
}