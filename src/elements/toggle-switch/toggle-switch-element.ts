import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators';

import styleToggleSwitch from './toggle-switch-element.scss';

@customElement('aotw-toggle-switch')
export class ToggleSwitchElement extends LitElement {
  @property({ type: Boolean })
  isActive = false;

  @property({ type: Boolean })
  isDisabled = false;

  static styles = styleToggleSwitch;

  render() {
    return html`
      <div
        class="
          toggle-switch
          ${this.isActive ? 'active' : ''}
          ${this.isDisabled ? 'disabled': ''}
        "
        @click=${() => this.toggleIsActive()}
      >
        <div class="handle"></div>
      </div>
    `;
  }

  private toggleIsActive() {
    if (this.isDisabled === false) {
      const onClick = new CustomEvent<boolean>('onClick', {
        detail: (this.isActive = !this.isActive)
      });
      this.dispatchEvent(onClick);
    }
  }
}