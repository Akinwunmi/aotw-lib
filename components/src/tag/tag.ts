import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import styleTag from './tag.scss';

const AOTW_TAG = 'aotw-tag';

@customElement(AOTW_TAG)
export class TagElement extends LitElement {
  @property()
  icon?: string;

  @property({ type: Boolean })
  deletable = false;

  private get slottedChildren() {
    const slot = this.shadowRoot?.querySelector('slot');
    return slot?.assignedNodes({ flatten: true });
  }

  static styles = unsafeCSS(styleTag);

  firstUpdated() {
    this.requestUpdate();
  }

  render(): TemplateResult {
    const classes = {
      'icon-only': !this.slottedChildren?.length
    };

    const iconHTML = this.icon
      ? html`<aotw-icon name=${this.icon}></aotw-icon>`
      : undefined;

    const deleteIconHTML = this.deletable
      ? html`<aotw-icon name="close" @click=${this.removeTagElement}></aotw-icon>`
      : undefined;

    return html`
      <button part="button" class=${classMap(classes)}>
        ${iconHTML}
        <slot></slot>
        ${deleteIconHTML}
      </button>
    `;
  }

  private removeTagElement() {
    const deleted = new CustomEvent('deleted', {
      detail: this
    });
    this.dispatchEvent(deleted);
    this.remove();
  }
}

declare global {
  interface HTMLElementTagNameMap {
    AOTW_TAG: TagElement
  }
}