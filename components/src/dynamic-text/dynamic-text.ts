import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { ClassInfo, classMap } from 'lit/directives/class-map.js';

import styleDynamicText from './dynamic-text.scss?inline';

const AOTW_DYNAMIC_TEXT = 'aotw-dynamic-text';
@customElement(AOTW_DYNAMIC_TEXT)
export class DynamicTextElement extends LitElement {
  @property()
  public alignment: 'left' | 'right' = 'left';

  @query('.dynamic-text')
  private _content!: HTMLDivElement;

  private _duration = 1500;
  private _interval = 6000;

  public static override styles = unsafeCSS(styleDynamicText);

  protected override firstUpdated(): void {
    this._setDurationAndInterval();
    this._setAnimation();
    setInterval(() => {
      this._setAnimation();
    }, this._interval);
  }
  
  protected override render(): TemplateResult {
    const classes: ClassInfo = {
      'right-aligned': this.alignment === 'right'
    };

    return html`
      <div class="dynamic-text ${classMap(classes)}">
        <slot></slot>
      </div>
    `;
  }
  
  private _setAnimation(): void {
    if (!this._content) {
      return;
    }
    if (this._content.clientWidth > this.clientWidth) {
      const margin = this.clientWidth - this._content.clientWidth;
      this._content.style[this.alignment] = `${margin}px`;
      setTimeout(() => {
        this._content.style[this.alignment] = '0';
      }, this._duration);
    }
  }

  private _setDurationAndInterval(): void {
    if (!this._content) {
      return;
    }
    this._duration = (this._content.clientWidth - this.clientWidth) / 4 * 1000;
    this._interval += this._duration * 2;
    this._content.style.transitionDuration = `${this._duration}ms`;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    AOTW_DYNAMIC_TEXT: DynamicTextElement
  }
}
