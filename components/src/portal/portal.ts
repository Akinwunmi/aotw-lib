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

  public attach(element: HTMLElement, options?: PortalOptions): HTMLElement {
    if (options?.parent) {
      this.parentElement = options.parent;
    }
    if (!this.attached) {
      this.attached = element;
      this.parentElement.appendChild(this.attached);
    }
    this.attached.style.display = 'block';
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
