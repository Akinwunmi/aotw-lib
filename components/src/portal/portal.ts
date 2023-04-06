import { PortalOptions } from './portal.model';


export class Portal {
  private _attached?: HTMLElement;
  private _parentElement = document.body;

  public get attached(): HTMLElement | undefined {
    return this._attached;
  }

  public attach(element: HTMLElement, options?: PortalOptions): HTMLElement {
    if (options?.parent) {
      this._parentElement = options.parent;
    }
    if (!this._attached) {
      this._attached = element;
      this._parentElement.appendChild(this._attached);
    }
    this._attached.style.display = 'block';
    return this._attached;
  }

  public close(): void {
    if (this._attached) {
      this._attached.style.display = 'none';
    }
  }

  public detach(): void {
    if (!this._attached) {
      return;
    }
    this._parentElement.removeChild(this._attached);
    this._attached = undefined;
  }
}
