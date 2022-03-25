import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators';

import styleDialog from './dialog-element.scss';

import '../close-button';
import '../scrim';

@customElement('aotw-dialog')
export class DialogElement extends LitElement {
  @property()
  dialogTitle!: string;

  @property({ type: Boolean })
  scrim = true;
  
  closed = new Event('closed');

  static styles = styleDialog;

  private scrimHTML = html`
    <aotw-scrim @click=${this.close}></aotw-scrim>
  `;

  render() {
    return html`
      <div class="dialog">
        <header>
          <section>
            <h3>${this.dialogTitle}</h3>
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
      ${this.scrim ? this.scrimHTML : null}
    `;
  }

  close() {
    this.dispatchEvent(this.closed);
  }
}