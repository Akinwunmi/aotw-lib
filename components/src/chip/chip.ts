import { html, LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { Icon } from '../icon/icon';

import styleChip from './chip.scss';

const AOTW_CHIP = 'aotw-chip';

@customElement(AOTW_CHIP)
export class ChipElement extends LitElement {
  @property({ type: Boolean })
  active = false;

  @property({ type: Boolean })
  deletable = false;

  @property({ type: Boolean })
  disabled = false;

  @property()
  icon?: Icon;

  static styles = unsafeCSS(styleChip);

  render() {
    const classes = {
      active: this.active,
      disabled: this.disabled
    };

    const iconHTML = this.icon
      ? html`<aotw-icon name=${this.icon}></aotw-icon>`
      : null;

    const deleteIconHTML = this.deletable
      ? html`<aotw-icon name="close" @click=${() => this.removeChipElement()}></aotw-icon>`
      : null;

    return html`
      <button
        class="chip ${classMap(classes)}"
        part="button"
        @click=${() => this.toggleActive()}
      >
        ${iconHTML}
        <slot></slot>
        ${deleteIconHTML}
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

  private removeChipElement() {
    const deleted = new CustomEvent('deleted', {
      detail: this
    });
    this.dispatchEvent(deleted);
    this.remove();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    AOTW_CHIP: ChipElement
  }
}