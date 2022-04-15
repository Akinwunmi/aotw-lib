import { svg, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('icon-check')
export class IconCheckElement extends LitElement {
  render() {
    return svg`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none">
        <title>Check Icon</title>
        <path
          d="M0 8.5L2 6.5L7 11.5L16 2.5L18 4.5L7 15.5Z"
          fill="currentColor"
        />
      </svg>
    `;
  }
}
