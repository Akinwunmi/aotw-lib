import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, query, queryAssignedElements } from 'lit/decorators.js';

import styleTabGroup from './tab-group.scss';
import { AotwTab } from './tab';
import { SelectedTabEvent } from './tab.model';

const AOTW_TAB_GROUP = 'aotw-tab-group';

@customElement(AOTW_TAB_GROUP)
export class AotwTabGroup extends LitElement {
  @query('.active-line')
  private _activeLine!: HTMLDivElement;

  @queryAssignedElements()
  private _tabs!: AotwTab[];

  public static override styles = unsafeCSS(styleTabGroup);

  protected override firstUpdated(): void {
    const activeTab = this._tabs.findIndex(tab => !tab.attributes.getNamedItem('disabled'));
    this._tabs[activeTab].toggleAttribute('active', true);
    this._tabs.forEach((tab, i) => tab.addEventListener('click', this._setActive.bind(this, tab, i)));
    this._activeLine.style.width = `${100 / this._tabs.length}%`;
    this._activeLine.style.left = `${100 / this._tabs.length * activeTab}%`;
  }

  protected override render(): TemplateResult {
    return html`
      <slot></slot>
      <div class="active-line"></div>
    `;
  }

  private _setActive(tab: AotwTab, index: number): void {
    this._tabs.forEach(tab => tab.toggleAttribute('active', false));
    tab.toggleAttribute('active', true);
    this._activeLine.style.left = `${100 / this._tabs.length * index}%`;

    const event = new CustomEvent<SelectedTabEvent>('selectedTab', {
      detail: { index, tab }
    });
    this.dispatchEvent(event);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    AOTW_TAB_GROUP: AotwTabGroup
  }
}
