import { TemplateResult, html } from 'lit';
import { customElement } from 'lit/decorators.js';
import { AotwContainer } from '../container';

const AOTW_LIST = 'aotw-list';

@customElement(AOTW_LIST)
export class AotwList extends AotwContainer {
  public elevated = true;

  protected override render(): TemplateResult {
    return html`
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    AOTW_LIST: AotwList
  }
}
