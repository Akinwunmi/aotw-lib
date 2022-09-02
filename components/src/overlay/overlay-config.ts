import { OverlayPosition } from "./overlay-position";

export class OverlayConfig {
  public position!: OverlayPosition;

  public constructor(config: OverlayConfig) {
    this.position = config.position;
  }
}
