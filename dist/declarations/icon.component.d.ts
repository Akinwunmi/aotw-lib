import { LitElement } from 'lit-element';
import './icon-logo.component.ts';
export declare class IconComponent extends LitElement {
    color: string;
    name: string;
    width: string;
    static styles: any[];
    render(): import("lit-html").TemplateResult<1>;
}
declare global {
    interface HTMLElementTagNameMap {
        'aotw-icon': IconComponent;
    }
}
//# sourceMappingURL=icon.component.d.ts.map