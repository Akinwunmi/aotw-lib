import { LitElement, html, unsafeCSS } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { ClassInfo, classMap } from 'lit/directives/class-map.js';

import styleToggleSwitch from './toggle-switch.scss';

const AOTW_TOGGLE_SWITCH = 'aotw-toggle-switch';

@customElement(AOTW_TOGGLE_SWITCH)
export class ToggleSwitchElement extends LitElement {
  @property({ type: Boolean })
  public active = false;

  @property({ type: Boolean })
  public disabled = false;

  public static override styles = unsafeCSS(styleToggleSwitch);

  protected override render() {
    const classes: ClassInfo = {
      active: this.active,
      disabled: this.disabled
    };

    return html`
      <div
        class="toggle-switch ${classMap(classes)}"
        @click=${this._toggleActive}
      >
        <div class="switch"></div>
        <div class="handle"></div>
      </div>
      <slot></slot>
    `;
  }

  private _toggleActive() {
    const onClick = new CustomEvent<boolean>('onClick', {
      detail: (this.active = !this.active)
    });
    this.dispatchEvent(onClick);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    AOTW_TOGGLE_SWITCH: ToggleSwitchElement
  }
}
