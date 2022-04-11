import { html, LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import styleToggleSwitch from './toggle-switch-element.scss';

const AOTW_TOGGLE_SWITCH = 'aotw-toggle-switch';

@customElement(AOTW_TOGGLE_SWITCH)
export class ToggleSwitchElement extends LitElement {
  @property({ type: Boolean })
  active = false;

  @property({ type: Boolean })
  disabled = false;

  static styles = unsafeCSS(styleToggleSwitch);

  render() {
    const classes = {
      active: this.active,
      disabled: this.disabled
    }

    return html`
      <div
        class="toggle-switch ${classMap(classes)}"
        @click=${() => this.toggleActive()}
      >
        <div class="handle"></div>
      </div>
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
    AOTW_TOGGLE_SWITCH: ToggleSwitchElement
  }
}