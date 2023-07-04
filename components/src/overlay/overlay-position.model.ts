type HorizontalSide = 'left' | 'right' | 'center';
type VerticalSide = 'top' | 'bottom' | 'center';
export type Side = HorizontalSide | VerticalSide;

export type StartingPoint = 'start' | 'end' | 'center';

export interface Positions {
  absolute?: AbsolutePosition;
  relative?: RelativePosition;
  offset?: OffsetPosition;
}

export interface AbsolutePosition {
  horizontal: HorizontalSide;
  vertical: VerticalSide;
}

export interface RelativePosition {
  side: Side;
  startingPoint: StartingPoint;
}

export interface OffsetPosition {
  x: number;
  y: number;
}

export interface AbsolutePositionStyle {
  'justify-content': string;
  'align-items': string;
}

export interface RelativePositionStyle extends AbsolutePositionStyle {
  top: number | null;
  right: number | null;
  bottom: number | null;
  left: number | null;
  width: number | null;
  height: number | null;
}

export interface OffsetPositionStyle {
  transform: string;
}

export interface Point {
  top: number;
  right: number;
  bottom: number;
  left: number;
}
