import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators';

import styleDialog from './dialog-element.scss';

import '../scrim';

@customElement('aotw-dialog')
export class DialogElement extends LitElement {
  @property() dialogTitle!: string;
  @property({ type: Boolean }) scrim = true;
  closed = new Event('closed');

  static styles = styleDialog;

  render() {
    return html`
      <div class="dialog">
        <header>
          <section>
            ${this.dialogTitle
              ? html` <h3>${this.dialogTitle}</h3>`
              : null}
            <div class="visual">
              <slot name="visual"></slot>
            </div>
          </section>
          <button class="btn-close" @click=${this.close}></button>
        </header>
        <div class="dialog_content">
          <slot></slot>
        </div>
      </div>
      ${this.scrim
        ? html`<aotw-scrim @click=${this.close}></aotw-scrim>`
        : null}
    `;
  }

  close() {
    this.dispatchEvent(this.closed);
  }
}