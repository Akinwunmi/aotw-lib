import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import styleList from './list.scss';

const AOTW_LIST = 'aotw-list';

@customElement(AOTW_LIST)
export class ListElement extends LitElement {
  public static override styles = unsafeCSS(styleList);

  protected override render(): TemplateResult {
    return html`
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    AOTW_LIST: ListElement
  }
}
