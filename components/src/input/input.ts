import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import styleInput from './input.scss';
import { InputMessage, InputMessageState } from './input.model';

const AOTW_INPUT = 'aotw-input';

@customElement(AOTW_INPUT)
export class AotwInput extends LitElement {
  @property({ type: String })
  label?: string;

  @property()
  message?: InputMessage;

  @property({ type: String })
  placeholder?: string;

  @property({ type: String })
  value?: string;

  @query('input')
  private input!: HTMLInputElement;

  static styles = unsafeCSS(styleInput);
  
  firstUpdated() {
    this.requestUpdate();
  }

  render(): TemplateResult {
    const classes = {
      error: this.message?.state === InputMessageState.Error,
      warning: this.message?.state === InputMessageState.Warning
    };

    const labelText = this.label
      ? html`<span>${this.label}</span>`
      : undefined;

    const removeButton = this.value
      ? html`
          <aotw-button
            ghost
            icon="close"
            variant="secondary"
            @click=${this.removeValue}
          ></aotw-button>
        `
      : undefined;
    
    const messageText = this.message
      ? html`<p class=${classMap(classes)}>${this.message.text}</p>`
      : undefined;

    return html`
      <label>
        ${labelText}
        <input
          type="text"
          placeholder=${this.placeholder}
          value=${this.value}
          @blur=${this.handleBlur}
        />
        ${removeButton}
      </label>
      ${messageText}
    `;
  }

  private updateInputValue() {
    this.requestUpdate();
    this.value = this.input?.value;
  }

  private removeValue() {
    this.input.value = '';
    this.updateInputValue();
  }
  
  private handleBlur() {
    this.updateInputValue();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    AOTW_INPUT: AotwInput
  }
}