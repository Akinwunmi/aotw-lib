import { html, LitElement } from 'lit-element';
import { customElement, property } from 'lit/decorators.js';

import styleIcon from './icon.component.scss';

import './icon-logo.component.ts';

@customElement('aotw-icon')
export class IconComponent extends LitElement {
  @property() color!: string;
  @property() name!: string;
  @property() width!: string;

  static styles = [styleIcon];

  render() {
    if (this.color) {
      this.style.setProperty('color', this.color);
    }    
    this.style.setProperty('width', this.width);

    switch (this.name) {
      case 'logo':
        return html`<icon-logo color=${this.color}></icon-logo>`;
      default:
        return html`Icon not found`;
    }
  }
}

declare global {
  interface HTMLElementTagNameMap {
    'aotw-icon': IconComponent
  }
}