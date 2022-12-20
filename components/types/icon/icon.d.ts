import { LitElement, TemplateResult } from 'lit';
import './icons';
import { IconSize } from './icon.model';
export declare class IconElement extends LitElement {
    name: string;
    size: IconSize;
    static styles: import("lit").CSSResult;
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        AOTW_ICON: IconElement;
    }
}
