import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators';

import styleToggleButton from './toggle-button-element.scss';

@customElement('aotw-toggle-button')
export class ToggleButtonElement extends LitElement {
  @property({ type: Boolean })
  isActive = false;

  @property({ type: Boolean })
  isDisabled = false;

  static styles = styleToggleButton;

  render() {
    return html`
      <button
        class="
          toggle-button
          ${this.isActive ? 'active' : ''}
          ${this.isDisabled ? 'disabled' : ''}
        "
        @click=${() => this.toggleIsActive()}
      >
        <p>
          <slot></slot>
        </p>
      </button>
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