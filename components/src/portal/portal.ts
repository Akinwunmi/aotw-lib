import { PortalOptions } from './portal.model';


export class Portal {
  private _attached?: HTMLElement;
  private parentElement = document.body;

  public get attached(): HTMLElement | undefined {
    return this._attached;
  }

  public set attached(attached: HTMLElement | undefined) {
    this._attached = attached;
  }

  public open(element: HTMLElement, options?: PortalOptions): HTMLElement {
    if (options?.parent) {
      this.parentElement = options.parent;
    }
    if (!this.attached) {
      element.after(element.cloneNode(true));
      this.attached = element;
      this.parentElement.appendChild(this.attached);
    }
    this.attached.style.display = 'block';
    this.attached.style.pointerEvents = 'auto';
    this.attached.style.zIndex = '1';
    return this.attached;
  }

  public close(): void {
    if (this.attached) {
      this.attached.style.display = 'none';
    }
  }

  public detach(): void {
    if (!this.attached) {
      return;
    }
    this.parentElement.removeChild(this.attached);
    this.attached = undefined;
  }
}
