import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, queryAssignedElements } from 'lit/decorators.js';

import styleField from './field.scss?inline';

const AOTW_FIELD = 'aotw-field';

@customElement(AOTW_FIELD)
export class AotwField extends LitElement {
  @queryAssignedElements()
  private _elements!: HTMLElement[];

  public static override styles = unsafeCSS(styleField);

  protected override firstUpdated(): void {
    this._getInputAttributesAndRender();
  }

  protected override render(): TemplateResult {
    return html`
      <slot></slot>
    `;
  }

  private _getInputAttributesAndRender(): void {
    const label = this._elements.find(element => element.localName === 'aotw-label');
    const input = this._elements.find(element => element.localName === 'input');
    const message = this._elements.find(element => element.localName === 'aotw-message');
    const error = this._elements.find(element => element.localName === 'aotw-error');
    const inputError = input?.getAttribute('error');
    const inputMessage = input?.getAttribute('message');

    if (inputMessage) {
      const newMessage = message || document.createElement('aotw-message');
      newMessage.innerHTML = inputMessage;
      this.appendChild(newMessage);
    }

    if (inputError) {
      label?.toggleAttribute('error', true);
      message?.remove();
      const newError = error || document.createElement('aotw-error');
      newError.innerHTML = inputError;
      this.appendChild(newError);
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    AOTW_FIELD: AotwField
  }
}
