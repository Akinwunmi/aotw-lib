import { LitElement, TemplateResult, unsafeCSS, svg } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { unsafeSVG } from 'lit/directives/unsafe-svg.js';

import styleIcon from './icon.scss';
import { IconSize } from './icon.model';
import { AotwIconRegistry } from './icon-registry';

const AOTW_ICON = 'aotw-icon';

@customElement(AOTW_ICON)
export class IconElement extends LitElement {
  @property({ type: String })
  public name!: string;

  @property({ type: String, reflect: true })
  public size = IconSize.Small;

  public static override styles = unsafeCSS(styleIcon);

  protected override render(): TemplateResult {
    return svg`
      ${unsafeSVG(AotwIconRegistry.getIcon(this.name).data)}
    `;
  }
}

declare global {
  interface HTMLElementTagNameMap {
    AOTW_ICON: IconElement
  }
}
