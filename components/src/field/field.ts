import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';

import styleField from './field.scss';

const AOTW_FIELD = 'aotw-field';

@customElement(AOTW_FIELD)
export class AotwField extends LitElement {
  private _disabled = false;

  @property({ type: Boolean, reflect: true })
  public set disabled(disabled: boolean) {
    this._elements.forEach(element => element.toggleAttribute('disabled', disabled));
    this._disabled = disabled;
  }

  public get disabled(): boolean {
    return this._disabled;
  }

  @queryAssignedElements()
  private _elements!: HTMLElement[];

  public static styles = unsafeCSS(styleField);

  protected override firstUpdated(): void {
    this.disabled = this._disabled;
    this.requestUpdate();
  }

  protected override render(): TemplateResult {
    return html`
      <slot></slot>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    AOTW_FIELD: AotwField
  }
}