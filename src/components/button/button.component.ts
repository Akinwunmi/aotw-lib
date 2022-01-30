import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import { ButtonAction, ButtonType } from './button';
import styleButton from './button.component.scss';

@customElement('aotw-button')
export class ButtonComponent extends LitElement {
  @property() action!: string;
  @property() type!: string;

  static styles = [
    css`${unsafeCSS(styleButton)}`
  ];

  render() {
    this.action = this.action ?? ButtonAction.BUTTON;
    this.type = this.type ?? ButtonType.PRIMARY;

    return html`
      <button type=${this.action} class=${this.type}>
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