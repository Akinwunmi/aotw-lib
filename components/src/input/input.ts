import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import styleInput from './input.scss';

const AOTW_INPUT = 'aotw-input';

@customElement(AOTW_INPUT)
export class AotwInput extends LitElement {
  @property({ type: Boolean, reflect: true })
  public disabled = false;

  public static override styles = unsafeCSS(styleInput);

  protected override firstUpdated(): void {
    this.requestUpdate();
  }

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