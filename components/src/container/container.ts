import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';

import styleContainer from './container.scss?inline';

const AOTW_CONTAINER = 'aotw-container';

@customElement(AOTW_CONTAINER)
export class AotwContainer extends LitElement {
  @property({ type: Boolean, reflect: true })
  public elevated = false;

  @property({ type: Boolean, reflect: true })
  public scrollable = false;

  @query('.content')
  private _content!: HTMLDivElement;

  @query('.track')
  private _track!: HTMLDivElement;

  @query('.thumb')
  private _thumb!: HTMLDivElement;

  private _startPosition = 0;
  private _isDragging = false;

  public static override styles = [unsafeCSS(styleContainer)];

  protected override firstUpdated(): void {
    const { offsetHeight: contentHeight, scrollHeight: contentScrollHeight } = this._content;
    const trackHeight = this._track.offsetHeight;
    const thumbHeight = (contentHeight / contentScrollHeight) * trackHeight;
    this._thumb.style.height = `${thumbHeight}px`;
  }

  protected override render(): TemplateResult {
    return html`
      <div class="content" @scroll=${this._moveThumb}>
        <slot></slot>
      </div>
      <div class="scrollbar">
      <div class="track" @click=${this._setThumb}>
        <div
          class="thumb"
          @mousedown=${this._onMouseDown}
          @mousemove=${this._onMouseMove}
          @mouseup=${this._onMouseUp}
        ></div>
      </div>
      </div>
    `;
  }

  private _moveThumb(): void {
    const trackHeight = this._track.offsetHeight;
    const thumbTop = (this._content.scrollTop / this._content.scrollHeight) * trackHeight;
    this._thumb.style.top = `${thumbTop}px`;
  }

  private _setThumb(e: MouseEvent): void {
    const thumbHeight = Number(this._thumb.style.height.replace('px', ''));
    this._thumb.style.top = `${e.offsetY - thumbHeight <= 0 ? 0 : e.offsetY - thumbHeight}px`;
    this._updateContent(e.clientY);
  }

  private _onMouseDown(e: MouseEvent): void {
    e.stopPropagation();
    e.preventDefault();
    this._isDragging = true;
    this._startPosition = e.clientY;
    this._scrollTop = this._content.scrollTop;
  }

  private _onMouseMove(e: MouseEvent): void {
    e.stopPropagation();
    e.preventDefault();
    if (!this._isDragging) {
      return;
    }
    this._updateContent(e.clientY);
  }

  private _onMouseUp(e: MouseEvent): void {
    e.stopPropagation();
    e.preventDefault();
    this._isDragging = false;
  }

  private _updateContent(clientY: number): void {
    const { scrollHeight } = this._content;
    const differenceY = clientY - this._startPosition;
    const updatedScrollTop = differenceY * (scrollHeight / this._track.offsetHeight);
    this._content.scrollTop = updatedScrollTop;
  }
}
