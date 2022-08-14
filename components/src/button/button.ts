import { LitElement, TemplateResult, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ClassInfo, classMap } from 'lit/directives/class-map.js';

import styleButton from './button.scss';
import { ButtonVariant } from './button.model';

const AOTW_BUTTON = 'aotw-button';
@customElement(AOTW_BUTTON)
export class ButtonElement extends LitElement {
  @property({ type: Boolean })
  public active = false;

  @property({ type: Boolean })
  public disabled = false;

  @property({ type: Boolean })
  public ghost = false;

  @property({ type: Boolean })
  public outline = false;

  @property()
  public variant = ButtonVariant.Primary;

  public static override styles = unsafeCSS(styleButton);

  protected override render(): TemplateResult {
    const classes: ClassInfo = {
      active: this.active,
      disabled: this.disabled,
      ghost: this.ghost,
      outline: this.outline,
      primary: this.variant === ButtonVariant.Primary,
      secondary: this.variant === ButtonVariant.Secondary
    };

    return html`
      <button class=${classMap(classes)}>
        <slot name="prefix"></slot>
        <slot></slot>
      </button>
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    AOTW_BUTTON: ButtonElement
  }
}
