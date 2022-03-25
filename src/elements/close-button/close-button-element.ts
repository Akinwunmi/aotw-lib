import { html, LitElement } from 'lit';
import { customElement } from 'lit/decorators';

import styleCloseButton from './close-button-element.scss';

@customElement('aotw-close-button')
export class CloseButtonElement extends LitElement {
  static styles = styleCloseButton;

  render() {
    return html`
      <button class="close-button"></button>
    `
  }
}