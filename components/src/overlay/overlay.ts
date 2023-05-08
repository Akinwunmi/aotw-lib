import { Portal } from '../portal';
import { OverlayPosition } from './overlay-position';
import { OverlayRef } from './overlay-ref';
import { OverlayConfig } from './overlay.model';

export class Overlay {
  private static instance?: Overlay;

  private container!: HTMLDivElement;
  private host!: HTMLDivElement;
  private scrim!: HTMLDivElement;

  public static get(): Overlay {
    if (!this.instance) {
      this.instance = new Overlay();
    }
    return this.instance;
  }

  public create(config?: OverlayConfig): OverlayRef {
    this.createContainer();
    this.createHost();
    const panel = this.createPanel();
    const portal = new Portal();

    return new OverlayRef(this.host, panel, portal, this.scrim, config);
  }

  public position(): OverlayPosition {
    return new OverlayPosition();
  }

  private createContainer(): void {
    if (this.container) {
      return;
    }

    const style: Partial<CSSStyleDeclaration> = {
      inset: '0',
      pointerEvents: 'none',
      position: 'fixed'
    };
    this.container = this.createElement('aotw-overlay', style);
    document.body.appendChild(this.container);
    this.createScrim();
  }

  private createHost(): void {
    const style: Partial<CSSStyleDeclaration> = {
      display: 'flex',
      inset: '0',
      placeContent: 'center',
      placeItems: 'center',
      position: 'absolute'
    };
    this.host = this.createElement('host', style);
    this.container.appendChild(this.host);
  }

  private createPanel(): HTMLDivElement {
    const style: Partial<CSSStyleDeclaration> = {
      display: 'block',
      pointerEvents: 'auto'
    };
    return this.createElement('panel', style);
  }

  private createScrim(): void {
    const style: Partial<CSSStyleDeclaration> = {
      display: 'none',
      inset: '0',
      pointerEvents: 'auto',
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
