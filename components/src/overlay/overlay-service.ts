import { OverlayContainerElement } from './overlay-container';
import { ElementInfo, ElementPosition, OverlayCreateOptions, OverlayRemoveOptions } from './overlay-container.model';

export class OverlayService {
  private static _containers: OverlayContainerElement[] = [];

  public static create(options?: OverlayCreateOptions): void {
    if (!options?.name && this._containers.length) {
      throw new Error('A default overlay container already exists');
    }
    if (options?.name && (this.getContainerWithName(options.name))) {
      throw new Error('An overlay container with that name already exists');
    }

    const container = new OverlayContainerElement();
    if (options?.disableClickOutside) {
      container.toggleAttribute('disableClickOutside', true);
    }
    if (options?.name) {
      container.setAttribute('name', options.name);
    }
    this._containers.push(container);
    (options?.location || document.body).prepend(container);
  }

  public static attach(info: ElementInfo, position?: ElementPosition): void {
    const container = this.getContainer(info.name);
    if (!this._containers.length || !container) {
      throw new Error('No overlay container found to attach this element to');
    }

    if (position) {
      container.setAttribute('position', JSON.stringify(position));
    }
    container.appendChild(info.element);
    container.toggleAttribute('close', false);
  }

  public static remove(options?: OverlayRemoveOptions): void {
    const container = this.getContainer(options?.name);
    if (container) {
      const index = this._containers.indexOf(container);
      if (index > -1) {
        this._containers.splice(index, 1);
      }
      container.remove();
    }
  }

  public static removeAll(): void {
    const containers = document.querySelectorAll('aotw-overlay-container');
    containers.forEach(container => container.remove());
    this._containers = [];
  }

  private static getContainer(name?: string): OverlayContainerElement | undefined {
    return name
      ? this.getContainerWithName(name)
      : this._containers[0];
  }

  private static getContainerWithName(name: string): OverlayContainerElement | undefined {
    return this._containers.find(container => container.getAttribute('name') === name);
  }
}
