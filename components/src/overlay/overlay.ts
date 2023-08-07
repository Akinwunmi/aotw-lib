import { Portal } from '../portal';
import { OverlayPosition } from './overlay-position';
import { OverlayRef } from './overlay-ref';
import { OverlayConfig } from './overlay.model';

export class Overlay {
  private static instance?: Overlay;

  private container!: HTMLDivElement;
  private scrim!: HTMLDivElement;

  public static get(): Overlay {
    if (!this.instance) {
      this.instance = new Overlay();
    }
    return this.instance;
  }

  public create(config?: OverlayConfig): OverlayRef {
    this.createContainer();
    const portal = new Portal();

    return new OverlayRef(this.container, portal, this.scrim, config);
  }

  public position(): OverlayPosition {
    return new OverlayPosition();
  }

  private createContainer(): void {
    if (this.container) {
      return;
    }

    const style: Partial<CSSStyleDeclaration> = {
      display: 'flex',
      inset: '0',
      placeContent: 'center',
      placeItems: 'center',
      position: 'fixed'
    };
    this.container = this.createElement('aotw-overlay', style);
    document.body.appendChild(this.container);
    this.createScrim();
  }

  private createScrim(): void {
    const style: Partial<CSSStyleDeclaration> = {
      display: 'none',
      inset: '0',
      position: 'fixed'
    };
    this.scrim = this.createElement('scrim', style);
    this.container.prepend(this.scrim);
  }

  private createElement(name: string, style: Partial<CSSStyleDeclaration>): HTMLDivElement {
    const element = document.createElement('div');
    element.toggleAttribute(name, true);
    Object.assign(element.style, style);
    return element;
  }
}
