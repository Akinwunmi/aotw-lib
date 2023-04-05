import { TemplateResult } from 'lit';
import { AotwContainer } from '../container';
export declare class AotwCard extends AotwContainer {
    private _elements;
    static styles: import("lit").CSSResult[];
    render(): TemplateResult;
    private _handleSlotChange;
}
declare global {
    interface HTMLElementTagNameMap {
        AOTW_CARD: AotwCard;
    }
}
