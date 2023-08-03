import { Portal } from '../portal';

import { OverlayConfig } from './overlay.model';

export class OverlayRef {
  public host: HTMLDivElement;
  
  private panel: HTMLDivElement;
  private portal: Portal;
  private scrim: HTMLDivElement;
  private config?: OverlayConfig;

  public get attached(): HTMLElement | undefined {
    return this.portal.attached;
  }

  public constructor(
    host: HTMLDivElement,
    panel: HTMLDivElement,
    portal: Portal,
    scrim: HTMLDivElement,
    config?: OverlayConfig
  ) {
    this.host = host;
    this.panel = panel;
    this.portal = portal;
    this.scrim = scrim;
    this.config = config;
  }

  public attach(element: HTMLElement): HTMLElement {
    if (this.config) {
      this.config.position?.attach(this);
    }

    if (!this.attached) {
      this.panel.appendChild(element);
    }

    this.showScrim();
    return this.portal.attach(this.panel, { parent: this.host });
  }

  public close(): void {
    this.portal.close();
    this.hideScrim();
  }

  public detach(): void {
    this.portal.detach();
    this.hideScrim();

    while (this.host.children.length) {
      this.host.removeChild(this.host.children[0]);
    }
    this.host.remove();
  }

  private showScrim(): void {
    if (!this.config?.scrim && !this.config?.scrimWithBackground) {
      return;
    }
    
    let style: Partial<CSSStyleDeclaration> = {
      display: 'block'
    };

    if (this.config.scrim) {
      style = {
        ...style,
        backgroundColor: 'transparent'
      };
    }

    if (this.config.scrimWithBackground) {
      style = {
        ...style,
        backgroundColor: 'var(--aotw-color-grey-700)',
        opacity: '0.5'
      };
    }

    Object.assign(this.scrim.style, style);
    this.scrim.addEventListener('click', this.close.bind(this));
  }

  private hideScrim(): void {
    if (this.config?.scrim || this.config?.scrimWithBackground) {
      this.scrim.style.display = 'none';
    }
  }
}
