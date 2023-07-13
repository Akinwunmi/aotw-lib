import { Icon } from './icon.model';
export declare class AotwIconRegistry {
    private static _icons;
    static register(icons: Icon[]): void;
    static getIcon(name: string): Icon | undefined;
}
