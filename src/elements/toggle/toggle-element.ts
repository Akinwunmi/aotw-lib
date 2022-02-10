import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { styleMap } from 'lit/directives/style-map.js';

import styleToggle from './toggle-element.scss';

// ! WIP

@customElement('aotw-toggle')
export class ToggleElement extends LitElement {
  @property() selected!: string | number;
  @property({ type: Array }) values!: string[] | number[];

  static styles = [styleToggle];

  render() {
    if (this.values) {
      const backgroundWidth = 100 / this.values.length;
      const backgroundPosition =
        backgroundWidth * this.values.findIndex(value => value === this.selected);
      const activeBackgroundStyles = {
        width: backgroundWidth + '%',
        left: backgroundPosition + '%'
      };
  
      return html`
        <div class="active-background" style=${styleMap(activeBackgroundStyles)}></div>
        ${this.values.map(value =>
          html`
            <button
              class=${this.selected === value ? 'active' : ''}
              @click=${() => this.setSelected(value)}
            >
              ${value}
            </button>
          `
        )}
      `;
    }
  }

  private setSelected(value: string | number): void {
    const event = new CustomEvent<string | number>("setSelected", {
      detail: value
    });
    this.dispatchEvent(event);
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'aotw-toggle': ToggleElement
  }
}