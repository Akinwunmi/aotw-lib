import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property, queryAssignedElements } from 'lit/decorators.js';

import styleTag from './tag.scss';

const AOTW_TAG = 'aotw-tag';

@customElement(AOTW_TAG)
export class TagElement extends LitElement {
  @property()
  public icon?: string;

  @property({ type: Boolean })
  public deletable = false;

  @queryAssignedElements()
  private _elements!: HTMLElement[];

  public static override styles = unsafeCSS(styleTag);

  protected override firstUpdated() {
    const suffix = this._elements.find(element => element.attributes.getNamedItem('suffix'));
    suffix?.addEventListener('click', this.removeTagElement);
    this.requestUpdate();
  }

  protected override render(): TemplateResult {
    return html`
      <button part="button">
        <slot></slot>
      </button>
    `;
  }

  private removeTagElement = () => {
    const deleted = new CustomEvent('delete', {
      detail: this
    });
    this.dispatchEvent(deleted);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    AOTW_TAG: TagElement
  }
}