import { html, LitElement, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';

import '../close-button';
import '../scrim';

import styleDialog from './dialog.scss';

const AOTW_DIALOG = 'aotw-dialog';

@customElement(AOTW_DIALOG)
export class DialogElement extends LitElement {
  @property()
  dialogTitle!: string;

  @property({ type: Boolean })
  scrim = true;
  
  closed = new Event('closed');

  static styles = unsafeCSS(styleDialog);

  render() {
    const scrimHTML = this.scrim
      ? html`<aotw-scrim @click=${this.close}></aotw-scrim>`
      : null;
    const titleHTML = this.dialogTitle
      ? html` <h3>${this.dialogTitle}</h3>`
      : null;

    return html`
      <div class="dialog">
        <header>
          <section>
            ${titleHTML}
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

  close() {
    this.dispatchEvent(this.closed);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    AOTW_DIALOG: DialogElement
  }
}