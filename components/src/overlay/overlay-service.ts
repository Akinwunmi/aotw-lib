import { OverlayContainerElement } from './overlay-container';
import { ElementPosition, OverlayCreateOptions, OverlayRemoveOptions } from './overlay-container.model';

export class OverlayService {
  private static _container?: OverlayContainerElement;

  public static create(options?: OverlayCreateOptions): void {
    this._container = document.createElement('aotw-overlay-container') as OverlayContainerElement;
    
    if (options?.disableClickOutside) {
      this._container.toggleAttribute('disableClickOutside', true);
    }
    if (options?.name) {
      this._container.setAttribute('name', options.name);
    }
    (options?.location || document.body).prepend(this._container);
  }

  public static attach(element: HTMLElement, position?: ElementPosition): void {
    if (!this._container) {
      throw new Error('No overlay container found to attach this element to');
    }

    if (position) {
      this._container.setAttribute('position', JSON.stringify(position));
    }
    this._container.appendChild(element);
    this._container.toggleAttribute('close', false);
  }

  public static remove(options?: OverlayRemoveOptions): void {
    const containerToRemove = options?.name
      ? document.querySelector(`grav-local-overlay-container[name='${options.name}']`)
      : this._container;
    containerToRemove?.remove();
  }
}
