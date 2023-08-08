import { Portal } from '../portal';
import { OverlayPosition } from './overlay-position';
import { OverlayRef } from './overlay-ref';
import { OverlayConfig } from './overlay.model';

export class Overlay {
  private static instance?: Overlay;

  public static get(): Overlay {
    if (!this.instance) {
      this.instance = new Overlay();
    }
    return this.instance;
  }

  public create(config?: OverlayConfig): OverlayRef {
    const portal = new Portal();

    return new OverlayRef(portal, config);
  }

  public position(): OverlayPosition {
    return new OverlayPosition();
  }
}
