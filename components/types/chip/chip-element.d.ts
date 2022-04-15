import { LitElement } from 'lit';
import { Icon } from '../icon/icon';
export declare class ChipElement extends LitElement {
    active: boolean;
    disabled: boolean;
    icon: Icon;
    deletable: boolean;
    static styles: import("lit").CSSResult;
    render(): import("lit-html").TemplateResult<1>;
    private toggleActive;
    private removeChipElement;
}
declare global {
    interface HTMLElementTagNameMap {
        AOTW_CHIP: ChipElement;
    }
}
