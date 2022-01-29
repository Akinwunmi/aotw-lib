import { css, html, LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import styleIcon from './icon.component.scss';

import './icon-logo.component.ts';

@customElement('aotw-icon')
export class IconComponent extends LitElement {
  @property() color!: string;
  @property() name!: string;
  @property() width!: string;

  static styles = [css`${unsafeCSS(styleIcon)}`];

  render() {
    this.color = this.color ?? 'currentColor';
    this.style.setProperty('width', this.width);

    switch (this.name) {
      case 'logo':
        return html`<icon-logo color=${this.color}></icon-logo>`;
      default:
        return html`Icon not found`;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'aotw-icon': IconComponent
  }
}