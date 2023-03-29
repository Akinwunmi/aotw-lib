import { AotwContainer } from '../container';
export declare class AotwListItem extends AotwContainer {
    disabled: boolean;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        AOTW_LIST_ITEM: AotwListItem;
    }
}