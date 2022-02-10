import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { ButtonLevel, ButtonType } from './button';
import styleButton from './button-element.scss';

@customElement('aotw-button')
export class ButtonElement extends LitElement {
  @property() level!: ButtonLevel;
  @property() type!: ButtonType;

  static styles = [styleButton];

  render() {
    this.level = this.level ?? ButtonLevel.PRIMARY;
    this.type = this.type ?? ButtonType.BUTTON;

    return html`
      <button type=${this.type} class=${this.level}>
        <slot></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'aotw-button': ButtonElement
  }
}