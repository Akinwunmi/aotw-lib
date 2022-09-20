import { OverlayPosition } from './services/overlay-position';

export interface OverlayConfig {
  position?: OverlayPosition;
  scrim?: boolean;
  scrimWithBackground?: boolean;
  scrimCloseTrigger?: string;
}

type Orientation = 'start' | 'center' | 'end';

export interface Positions {
  offset?: Point;
  relative?: PositionAxes;
  absolute?: PositionAxes;
}

export interface PositionAxes {
  horizontal: Orientation;
  vertical: Orientation;
}

export interface Point {
  x: number;
  y: number;
}
