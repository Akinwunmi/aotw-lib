export interface ElementInfo {
  element: HTMLElement;
  name?: string;
}

export interface ElementPosition {
  x: number;
  y: number;
}

export interface OverlayOpenEvent {
  content: HTMLElement[],
  position?: ElementPosition
}

export interface OverlayCreateOptions {
  disableClickOutside?: boolean;
  location?: HTMLElement;
  name?: string;
}

export interface OverlayRemoveOptions {
  name?: string;
}
