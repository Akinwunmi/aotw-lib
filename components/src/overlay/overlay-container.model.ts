export interface OverlayCloseEvent {
  position: OverlayPosition
}

export interface OverlayOpenEvent {
  content: HTMLElement[],
  position: OverlayPosition
}

export interface OverlayPosition {
  top: string,
  right: string,
  bottom: string,
  left: string
}