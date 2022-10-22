import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ClassInfo, classMap } from 'lit/directives/class-map.js';

import styleButton from './button.scss';

const AOTW_BUTTON = 'aotw-button';
@customElement(AOTW_BUTTON)
export class ButtonElement extends LitElement {
  @property({ type: Boolean })
  public ghost = false;

  @property({ type: Boolean })
  public secondary = false;

  public static override styles = unsafeCSS(styleButton);

  protected firstUpdated(): void {
    this.classList.add('aotw-typography-button');
  }

  protected override render(): TemplateResult {
    const classes: ClassInfo = {
      ghost: this.ghost,
      secondary: this.secondary
    };

    return html`
      <button class=${classMap(classes)}> <slot></slot> </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    AOTW_BUTTON: ButtonElement
  }
}
