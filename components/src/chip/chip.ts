import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import styleChip from './chip.scss';

const AOTW_CHIP = 'aotw-chip';

@customElement(AOTW_CHIP)
export class ChipElement extends LitElement {
  @property({ type: Boolean })
  active = false;

  @property({ type: Boolean })
  disabled = false;

  static styles = unsafeCSS(styleChip);

  render(): TemplateResult {
    const classes = {
      active: this.active,
      disabled: this.disabled
    };

    return html`
      <button
        class="chip ${classMap(classes)}"
        part="button"
        @click=${() => this.toggleActive()}
      >
        <slot name="prefix"></slot>
        <slot></slot>
        <slot name="suffix" @click=${this.removeChipElement}></slot>
      </button>
    `;
  }

  private toggleActive() {
    if (!this.disabled) {
      const onClick = new CustomEvent<boolean>('onClick', {
        detail: (this.active = !this.active)
      });
      this.dispatchEvent(onClick);
    }
  }

  private removeChipElement(e: Event) {
    e.stopPropagation();
    const chipToRemove = new CustomEvent('chipToRemove', {
      detail: this
    });
    this.dispatchEvent(chipToRemove);
    console.log('chipToRemove', this);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    AOTW_CHIP: ChipElement
  }
}