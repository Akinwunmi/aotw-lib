import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import styleContainer from './container.scss';

const AOTW_CONTAINER = 'aotw-container';

@customElement(AOTW_CONTAINER)
export class AotwContainer extends LitElement {
  @property({ type: Boolean, reflect: true })
  public elevated = false;

  public static override styles = [unsafeCSS(styleContainer)];

  protected override render(): TemplateResult {
    return html`
      <slot></slot>
    `;
  }
}
