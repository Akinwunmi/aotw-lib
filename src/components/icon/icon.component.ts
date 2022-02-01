import { css, html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

import styleIcon from './icon.component.scss';
import { Icon } from './icon';
import './icons/icon-logo.component.ts';

@customElement('aotw-icon')
export class IconComponent extends LitElement {
  @property() name!: Icon;

  static styles = [
    css`${unsafeCSS(styleIcon)}`
  ];

  render(): TemplateResult {
    if (!this.name) {
      return html`Define an icon`;
    }
    if (!Object.values(Icon).includes(this.name)) {
      return html`Icon not found`;
    }
    return html`
      ${unsafeHTML(`<icon-${this.name}></icon-${this.name}>`)}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'aotw-icon': IconComponent
  }
}