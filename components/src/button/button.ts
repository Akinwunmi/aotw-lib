import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { classMap } from 'lit/directives/class-map.js';

import { Icon } from '../icon/icon';

import styleButton from './button.scss';
import { ButtonVariant } from './button.model';

const AOTW_BUTTON = 'aotw-button';
@customElement(AOTW_BUTTON)
export class ButtonElement extends LitElement {
  @property({ type: Boolean })
  active = false;

  @property({ type: Boolean })
  disabled = false;

  @property()
  icon?: Icon;

  @property({ type: Boolean })
  ghost = false;

  @property({ type: Boolean })
  outline = false;

  @property()
  variant = ButtonVariant.Primary;

  static styles = unsafeCSS(styleButton);

  render(): TemplateResult {
    const classes = {
      active: this.active,
      disabled: this.disabled,
      ghost: this.ghost,
      outline: this.outline,
      primary: this.variant === ButtonVariant.Primary,
      secondary: this.variant === ButtonVariant.Secondary
    };

    const iconHTML = this.icon
      ? html`<aotw-icon .name=${this.icon}></aotw-icon>`
      : null;

    return html`
      <button class=${classMap(classes)}>
        ${iconHTML}
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