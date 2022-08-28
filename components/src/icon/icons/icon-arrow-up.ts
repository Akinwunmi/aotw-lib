import { svg, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('icon-arrow-up')
export class IconArrowUpElement extends LitElement {
  protected override render() {
    return svg`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none">
        <title>Arrow Up Icon</title>
        <path
          d="M16.75 12L15 13.75L9 7.75L3 13.75L1.25 12L9 4.25Z"
          fill="currentColor"
        />
      </svg>
    `;
  }
}
