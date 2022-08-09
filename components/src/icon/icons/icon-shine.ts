import { svg, LitElement } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('icon-shine')
export class IconShineElement extends LitElement {
  protected override render() {
    return svg`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 18 18" fill="none">
        <title>Shine Icon</title>
        <defs>
          <g id="sparks">
            <rect x="7.5" y="0" width="3" height="5" fill="currentColor" />
            <rect x="7.5" y="13" width="3" height="5" fill="currentColor" />
          </g>
        </defs>
        <use xlink:href="#sparks" />
        <use xlink:href="#sparks" transform="rotate(60 9 9)" />
        <use xlink:href="#sparks" transform="rotate(-60 9 9)" />
      </svg>
    `;
  }
}
