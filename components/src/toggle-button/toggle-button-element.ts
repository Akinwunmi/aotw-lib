import { html, LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { Icon } from '../icon/icon';

import styleToggleButton from './toggle-button-element.scss';

const AOTW_TOGGLE_BUTTON = 'aotw-toggle-button';

@customElement(AOTW_TOGGLE_BUTTON)
export class ToggleButtonElement extends LitElement {
  @property({ type: Boolean })
  active = false;

  @property({ type: Boolean })
  disabled = false;

  @property()
  icon?: Icon;

  static styles = unsafeCSS(styleToggleButton);

  render() {
    const classes = {
      active: this.active,
      disabled: this.disabled
    };

    const iconHTML = this.icon
      ? html`<aotw-icon name=${this.icon}></aotw-icon>`
      : null;

    return html`
      <button
        class="toggle-button ${classMap(classes)}"
        @click=${() => this.toggleActive()}
      >
        ${iconHTML}
        <slot></slot>
      </button>
    `;
  }

  toggleActive() {
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
    AOTW_TOGGLE_BUTTON: ToggleButtonElement
  }
}