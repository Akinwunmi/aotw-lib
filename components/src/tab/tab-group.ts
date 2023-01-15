import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property, query, queryAssignedElements } from 'lit/decorators.js';

import styleTabGroup from './tab-group.scss';
import { AotwTab } from './tab';
import { SelectedTabEvent } from './tab.model';

const AOTW_TAB_GROUP = 'aotw-tab-group';

@customElement(AOTW_TAB_GROUP)
export class AotwTabGroup extends LitElement {
  @property({ type: Number, reflect: true })
  public set activeTab(activeTab: number) {
    this._activeTab = activeTab;
    this._activeLine.style.left = `${100 / this._tabs.length * this._activeTab}%`;
  };

  private _activeTab = 0;

  @query('.active-line')
  private _activeLine!: HTMLDivElement;

  @queryAssignedElements()
  private _tabs!: AotwTab[];

  public static override styles = unsafeCSS(styleTabGroup);

  protected override render(): TemplateResult {
    return html`
      <slot @slotchange=${this._handleSlotChange.bind(this)}></slot>
      <div class="active-line"></div>
    `;
  }

  private _handleSlotChange(): void {
    this._tabs.forEach((tab, i) => tab.addEventListener('click', this._setActive.bind(this, tab, i)));
    this._activeLine.style.width = `${100 / this._tabs.length}%`;
  }

  private _setActive(tab: AotwTab, index: number): void {
    this.activeTab = index;

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
