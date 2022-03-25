import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { ButtonVariant } from './button';
import styleButton from './button-element.scss';

@customElement('aotw-button')
export class ButtonElement extends LitElement {
  @property({ type: Boolean })
  isDisabled = false;

  @property()
  variant = ButtonVariant.PRIMARY;

  static styles = styleButton;

  render() {
    return html`
      <button class="button ${this.variant} ${this.isDisabled ? 'disabled' : ''}">
        <p>
          <slot></slot>
        </p>
      </button>
    `;
  }
}
