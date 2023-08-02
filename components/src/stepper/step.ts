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

  @property({ type: Boolean, reflect: true })
  public disabled = false;

  public static override styles = [unsafeCSS(style)];

  protected override updated(): void {
    const event = new CustomEvent('updated');
    this.dispatchEvent(event);
  }

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
