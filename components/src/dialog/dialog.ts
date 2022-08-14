import { LitElement, TemplateResult, html, nothing, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '../scrim';
import styleDialog from './dialog.scss';

const AOTW_DIALOG = 'aotw-dialog';

@customElement(AOTW_DIALOG)
export class DialogElement extends LitElement {
  @property({ type: Boolean })
  public scrim = true;

  public static override styles = unsafeCSS(styleDialog);

  protected override render(): TemplateResult {
    const scrimHTML = this.scrim
      ? html`<aotw-scrim @click=${this._close}></aotw-scrim>`
      : nothing;

    return html`
      <div class="dialog">
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
      </div>
      ${scrimHTML}
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
