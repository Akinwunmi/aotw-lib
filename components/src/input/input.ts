import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import styleInput from './input.scss';

const AOTW_INPUT = 'aotw-input';

@customElement(AOTW_INPUT)
export class AotwInput extends LitElement {
  public static override styles = unsafeCSS(styleInput);

  protected override render(): TemplateResult {
    return html`
      <input class="input" value="Input" />
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    AOTW_INPUT: AotwInput
  }
}
