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

export interface OverlayCreateConfig {
  disableClickOutside?: boolean;
  location?: HTMLElement;
  name?: string;
}

export interface OverlayRemoveOptions {
  name?: string;
}



export interface OverlayConfig {
  disableClickOutside?: boolean;
  location?: HTMLElement;
  name?: string;
}