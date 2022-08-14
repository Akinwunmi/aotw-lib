import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeHTML } from 'lit/directives/unsafe-html.js';

import './icons';
import styleIcon from './icon.scss';
import { Icon } from './icon.model';

const AOTW_ICON = 'aotw-icon';

@customElement(AOTW_ICON)
export class IconElement extends LitElement {
  @property()
  public name!: Icon;

  @property({ reflect: true })
  public size: 'small' | 'medium' | 'large' | 'extra-large' = 'medium';

  public static override styles = unsafeCSS(styleIcon);

  protected override render(): TemplateResult {
    if (!Object.values(Icon).includes(this.name)) {
      return html``;
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
