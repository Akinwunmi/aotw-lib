import { AotwContainer } from '../container';
export declare class AotwCard extends AotwContainer {
    readonly elevated = true;
    static styles: import("lit").CSSResult[];
}
declare global {
    interface HTMLElementTagNameMap {
        AOTW_CARD: AotwCard;
    }
}
