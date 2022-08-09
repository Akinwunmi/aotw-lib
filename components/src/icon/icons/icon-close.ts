import { svg, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('icon-close')
export class IconCloseElement extends LitElement {
  protected override render() {
    return svg`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none">
        <title>Close Icon</title>
        <path
          d="M1.25 3L3 1.25L9 7.25L15 1.25L16.75 3L10.75 9L16.75 15L15 16.75L9 10.75L3 16.75L1.25 15L7.25 9Z"
          fill="currentColor"
        />
      </svg>
    `;
  }
}
