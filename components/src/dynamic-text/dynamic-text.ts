import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property, query } from 'lit/decorators.js';
import { ClassInfo, classMap } from 'lit/directives/class-map.js';

import styleDynamicText from './dynamic-text.scss';

const AOTW_DYNAMIC_TEXT = 'aotw-dynamic-text';
@customElement(AOTW_DYNAMIC_TEXT)
export class DynamicTextElement extends LitElement {
  @property()
  public alignment: 'left' | 'right' = 'left';

  @query('.dynamic-text')
  private _container!: HTMLDivElement;

  @query('.dynamic-text_content')
  private _content!: HTMLDivElement;

  private _duration = 1500;
  private _interval = 6000;

  static override styles = unsafeCSS(styleDynamicText);

  protected override firstUpdated(): void {
    if (this._content) {
      this._duration = (this._content.clientWidth - this._container.clientWidth) / 4 * 1000;
      this._interval += this._duration * 2;
      this._content.style.transitionDuration = `${this._duration}ms`;
    }
    this.setAnimation();
    setInterval(() => {
      this.setAnimation();
    }, this._interval);
  }
  
  public override render(): TemplateResult {
    const classes: ClassInfo = {
      'right-aligned': this.alignment === 'right'
    };

    return html`
      <div class="dynamic-text">
        <div class="dynamic-text_content ${classMap(classes)}">
          <slot></slot>
        </div>
      </div>
      `;
  }
  
  private setAnimation(): void {
    if (!(this._container || this._content)) {
      return;
    }
    const containerWidth = this._container.clientWidth;
    const contentWidth = this._content.clientWidth;
    if (contentWidth > containerWidth) {
      this._content.style[this.alignment] = `${containerWidth - contentWidth}px`;
      setTimeout(() => {
        this._content.style[this.alignment] = '0';
      }, this._duration);
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    AOTW_DYNAMIC_TEXT: DynamicTextElement
  }
}