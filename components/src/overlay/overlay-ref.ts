import { OverlayConfig } from './overlay.model';
import { Portal } from '../portal';
import { applyStyles } from './overlay.utils';

export class OverlayRef {
  private portal: Portal;

  public config?: OverlayConfig;  
  public scrim: HTMLDivElement;
  public host: HTMLDivElement;
  public panel: HTMLDivElement;

  public constructor(
    host: HTMLDivElement,
    panel: HTMLDivElement,
    portal: Portal,
    scrim: HTMLDivElement,
    config?: OverlayConfig
  ) {
    this.config = config;
    this.host = host;
    this.panel = panel;
    this.portal = portal;
    this.scrim = scrim;
  }

  public attach(element: HTMLElement): HTMLElement {
    if (this.config) {
      if (!this.config.scrimCloseTrigger) {
        this.config.scrimCloseTrigger = 'click';
      }
      this.config.position?.attach(this);
    }

    if (!this.portal.attached) {
      this.panel.appendChild(element);
    }
    
    this.showScrim();
    return this.portal.attach(this.panel, { parent: this.host });
  }

  public close(): void {
    this.portal.close();
    this.scrim.style.display = 'none';
  }

  public detach(): void {
    this.close();
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
        backgroundColor: 'var(--aotw-color-grey-500)',
        opacity: '0.5'
      };
    }

    applyStyles(this.scrim.style, style as CSSStyleDeclaration);

    if (this.config.scrimCloseTrigger) {
      this.scrim.addEventListener(this.config.scrimCloseTrigger, this.close.bind(this));
    }
  }
}
