import { svg, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('icon-arrow-down')
export class IconArrowDownElement extends LitElement {
  protected override render() {
    return svg`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none">
        <title>Arrow Down Icon</title>
        <path
          d="M1.25 6L3 4.25L9 10.25L15 4.25L16.75 6L9 13.75Z"
          fill="currentColor"
        />
      </svg>
    `;
  }
}
