import { html, LitElement } from 'lit-element';
import { customElement } from 'lit/decorators.js';
import styleIcon from './icon.component.scss';

@customElement('aotw-icon')
export class IconComponent extends LitElement {
  static styles = [styleIcon];

  render() {
    return html`<h1>Test</h1>`;
  }
}