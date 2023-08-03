import { OverlayPosition } from './overlay-position';

export interface OverlayConfig {
  onScrimTriggered?: (event: Event) => void,
  position?: OverlayPosition;
  scrim?: boolean;
  scrimWithBackground?: boolean;
}
