import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';

import styleList from './list.scss';

const AOTW_LIST = 'aotw-list';

@customElement(AOTW_LIST)
export class ListElement extends LitElement {
  private _disabled = false;

  @property({ type: Boolean })
  public set disabled(disabled: boolean) {
    if (
      !this._elements.some(element => element.attributes.getNamedItem('disabled')) ||
      this._elements.every(element => element.attributes.getNamedItem('disabled'))
    ) {
      this._elements.forEach(element => element.toggleAttribute('disabled', disabled));
    }
    this._disabled = disabled;
  }

  public get disabled(): boolean {
    return this._disabled;
  }

  @queryAssignedElements()
  private _elements!: HTMLElement[];

  public static override styles = unsafeCSS(styleList);

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
    AOTW_LIST: ListElement
  }
}
