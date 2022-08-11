import { svg, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('icon-dot')
export class IconDotElement extends LitElement {
  protected override render() {
    return svg`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none">
        <title>Dot Icon</title>
        <circle cx="9" cy="9" r="2" fill="currentColor" />
      </svg>
    `;
  }
}
