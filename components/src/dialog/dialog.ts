import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import styleDialog from './dialog.scss';

const AOTW_DIALOG = 'aotw-dialog';

@customElement(AOTW_DIALOG)
export class DialogElement extends LitElement {
  @property({ type: Boolean })
  public scrim = true;

  static override styles = unsafeCSS(styleDialog);

  public override render(): TemplateResult {
    const scrimHTML = this.scrim
      ? html`<aotw-scrim @click=${this.close}></aotw-scrim>`
      : undefined;

    return html`
      <div class="dialog">
        <header>
          <section>
            <slot name="title"></slot>
            <div class="visual">
              <slot name="visual"></slot>
            </div>
          </section>
          <aotw-close-button @click=${this.close}></aotw-close-button>
        </header>
        <div class="dialog_content">
          <slot></slot>
        </div>
      </div>
      ${scrimHTML}
    `;
  }

  private close(): void {
    const closeDialog = new CustomEvent<this>('closeDialog', {
      detail: this
    });
    this.dispatchEvent(closeDialog);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    AOTW_DIALOG: DialogElement
  }
}