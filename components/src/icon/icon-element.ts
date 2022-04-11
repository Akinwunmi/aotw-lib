import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

import './icons';
import styleIcon from './icon-element.scss';
import { Icon } from './icon';

const AOTW_ICON = 'aotw-icon';

@customElement(AOTW_ICON)
export class IconElement extends LitElement {
  @property() name!: Icon;

  static styles = unsafeCSS(styleIcon);

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
    AOTW_ICON: IconElement
  }
}