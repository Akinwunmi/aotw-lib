import { html, LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import styleChip from './chip-element.scss';

const AOTW_CHIP = 'aotw-chip';

@customElement(AOTW_CHIP)
export class ChipElement extends LitElement {
  @property({ type: Boolean })
  active = false;

  @property({ type: Boolean })
  disabled = false;

  static styles = unsafeCSS(styleChip);

  render() {
    const classes = {
      active: this.active,
      disabled: this.disabled
    }

    return html`
      <button
        class="chip ${classMap(classes)}"
        @click=${() => this.toggleActive()}
      >
        <slot></slot>
      </button>
    `;
  }

  private toggleActive() {
    if (this.disabled === false) {
      const onClick = new CustomEvent<boolean>('onClick', {
        detail: (this.active = !this.active)
      });
      this.dispatchEvent(onClick);
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    AOTW_CHIP: ChipElement
  }
}