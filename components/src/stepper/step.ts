import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import style from './step.scss?inline';

const AOTW_STEP = 'aotw-step';

@customElement(AOTW_STEP)
export class AotwStep extends LitElement {
  @property({ type: Boolean, reflect: true })
  public active = false;

  @property({ type: Boolean, reflect: true })
  public complete = false;

  public static override styles = [unsafeCSS(style)];

  protected override render(): TemplateResult {
    return html`
      <div class="handle"></div>
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    AOTW_STEP: AotwStep
  }
}
