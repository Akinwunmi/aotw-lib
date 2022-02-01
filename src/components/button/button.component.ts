import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { ButtonLevel, ButtonType } from './button';
import styleButton from './button.component.scss';

@customElement('aotw-button')
export class ButtonComponent extends LitElement {
  @property() level!: string;
  @property() type!: string;

  static styles = [
    css`${unsafeCSS(styleButton)}`
  ];

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
    'aotw-button': ButtonComponent
  }
}