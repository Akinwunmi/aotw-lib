import { Portal } from '../portal';
import { OverlayConfig } from './overlay.model';

export class OverlayRef {
  public container: HTMLDivElement;
  
  private portal: Portal;
  private scrim: HTMLDivElement;
  private config?: OverlayConfig;

  public get attached(): HTMLElement | undefined {
    return this.portal.attached;
  }

  public constructor(
    container: HTMLDivElement,
    portal: Portal,
    scrim: HTMLDivElement,
    config?: OverlayConfig
  ) {
    this.container = container;
    this.portal = portal;
    this.scrim = scrim;
    this.config = config;
  }

  public open(element: HTMLElement): HTMLElement {
    if (this.config) {
      this.config.position?.open(this);
    }

    this.showScrim();
    return this.portal.open(element, { parent: this.container });
  }

  public close(): void {
    this.portal.close();
    this.hideScrim();
  }

  public detach(): void {
    this.portal.detach();
    this.hideScrim();

    while (this.container.children.length) {
      this.container.removeChild(this.container.children[0]);
    }
    this.container.remove();
  }

  private handleScrimClose(event: Event): void {
    this.config?.onScrimTriggered?.(event);
    if (!event.defaultPrevented) {
      this.close();
    }
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
    this.scrim.addEventListener('click', this.handleScrimClose.bind(this), {
      once: true
    });
  }

  private hideScrim(): void {
    if (this.config?.scrim || this.config?.scrimWithBackground) {
      this.scrim.style.display = 'none';
    }
  }
}
