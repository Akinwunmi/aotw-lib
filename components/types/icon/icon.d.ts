import { LitElement, TemplateResult } from 'lit';
import './icons';
import { Icon } from './icon.model';
export declare class IconElement extends LitElement {
    name: Icon;
    size: 'small' | 'medium' | 'large' | 'extra-large';
    static styles: import("lit").CSSResult;
    protected render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        AOTW_ICON: IconElement;
    }
}
