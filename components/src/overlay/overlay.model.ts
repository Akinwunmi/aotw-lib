export interface ElementInfo {
  element: HTMLElement;
  name?: string;
}

export interface ElementPosition {
  x: number;
  y: number;
}

export interface OriginPosition {
  originX: 'left' | 'center' | 'right';
  originY: 'top' | 'center' | 'bottom';
}

export interface OverlayOpenEvent {
  content: HTMLElement[],
  position?: ElementPosition
}

export interface OverlayCreateConfig {
  disableClickOutside?: boolean;
  location?: HTMLElement;
  name?: string;
}

export interface OverlayRemoveOptions {
  name?: string;
}
