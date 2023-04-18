import { OverlayConfig } from './overlay.model';
import { OverlayPosition } from './overlay-position';
import { OverlayRef } from './overlay-ref';
import { Portal } from '../portal';
import { applyStyles } from './overlay.utils';

export class Overlay {
  private static instance: Overlay;

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

  public position() {
    return new OverlayPosition();
  }

  private createContainer(): void {
    if (this.container) {
      return;
    }

    const container = document.createElement('div');
    container.toggleAttribute('aotw-overlay-container', true);
    const style: Partial<CSSStyleDeclaration> = {
      alignItems: 'center',
      display: 'flex',
      inset: '0',
      justifyContent: 'center',
      padding: 'var(--aotw-overlay-container-padding)',
      pointerEvents: 'none',
      position: 'fixed',
      zIndex: 'var(--aotw-overlay-container-level)'
    };
    applyStyles(container.style, style as CSSStyleDeclaration);

    this.container = container;
    document.body.appendChild(this.container);
    this.createScrim();
  }

  private createScrim(): void {
    const scrim = document.createElement('div');
    scrim.toggleAttribute('aotw-overlay-scrim', true);
    const style: Partial<CSSStyleDeclaration> = {
      display: 'none',
      inset: '0',
      pointerEvents: 'auto',
      position: 'fixed'
    };
    applyStyles(scrim.style, style as CSSStyleDeclaration);
    
    this.scrim = scrim;
    this.container.prepend(this.scrim);
}

  private createHost(): void {
    const host = document.createElement('div');
    host.toggleAttribute('aotw-overlay-host', true);
    const style: Partial<CSSStyleDeclaration> = {
      display: 'flex',
      position: 'absolute',
      inset: '0',
      alignItems: 'center',
      justifyContent: 'center',
      pointerEvents: 'none'
    };
    applyStyles(host.style, style as CSSStyleDeclaration);
    this.host = host;

    this.container.appendChild(this.host);
  }

  private createPanel(): HTMLDivElement {
    const panel = document.createElement('div');
    panel.toggleAttribute('aotw-overlay-panel', true);
    const style: Partial<CSSStyleDeclaration> = {
      backgroundColor: 'var(--aotw-color-white)',
      boxShadow: 'var(--aotw-elevation-xs)',
      display: 'block',
      pointerEvents: 'auto'
    };
    applyStyles(panel.style, style as CSSStyleDeclaration);

    return panel;
  }
}
