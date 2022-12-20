import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import styleDialog from './dialog.scss';

const AOTW_DIALOG = 'aotw-dialog';

@customElement(AOTW_DIALOG)
export class DialogElement extends LitElement {
  public static override styles = unsafeCSS(styleDialog);

  protected override render(): TemplateResult {
    return html`
      <header>
        <section>
          <slot name="title"></slot>
          <div class="visual">
            <slot name="visual"></slot>
          </div>
        </section>
        <aotw-close-button @click=${this._close}></aotw-close-button>
      </header>
      <div class="dialog_content">
        <slot></slot>
      </div>
    `;
  }

  private _close(): void {
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
