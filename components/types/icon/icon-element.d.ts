import { LitElement, TemplateResult } from 'lit';
import './icons';
import { Icon } from './icon';
export declare class IconElement extends LitElement {
    name: Icon;
    static styles: import("lit").CSSResult;
    render(): TemplateResult;
}
declare global {
    interface HTMLElementTagNameMap {
        AOTW_ICON: IconElement;
    }
}
