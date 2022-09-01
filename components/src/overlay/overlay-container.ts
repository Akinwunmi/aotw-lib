import { html, LitElement, TemplateResult, unsafeCSS } from 'lit';
import { customElement } from 'lit/decorators.js';

import styleOverlayContainer from './overlay-container.scss';

const AOTW_OVERLAY_CONTAINER = 'aotw-overlay-container';

export class OverlayContainer {
  private static _container: HTMLElement;

  public static getContainer(location?: HTMLElement): HTMLElement {
    if (!this._container) {
      this._createContainer(location);
    }
    return this._container;
  }

  private static _createContainer(location?: HTMLElement): void {
    console.log(location);
    const container = document.createElement(AOTW_OVERLAY_CONTAINER);
    container.classList.add('aotw-overlay-container');
    (location || document.body).prepend(container);
    this._container = container;
  }
}

@customElement(AOTW_OVERLAY_CONTAINER)
export class AotwOverlayContainer extends LitElement {
  public static override styles = unsafeCSS(styleOverlayContainer);

  protected override render(): TemplateResult {
    return html`
      <slot></slot>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    AOTW_OVERLAY_CONTAINER: AotwOverlayContainer
  }
}
