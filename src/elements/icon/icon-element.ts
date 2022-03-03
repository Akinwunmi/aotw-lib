import { html, LitElement, TemplateResult } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

import styleIcon from './icon-element.scss';
import { Icon } from './icon';
import './icons/icon-logo-element.ts';

@customElement('aotw-icon')
export class IconElement extends LitElement {
  @property() name!: Icon;

  static styles = [styleIcon];

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
