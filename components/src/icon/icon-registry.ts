import { Icon } from './icon.model';

export class AotwIconRegistry {
  private static _icons: Icon[] = [];

  public static register(icons: Icon[]): void {
    this._icons = icons;
  }

  public static getIcon(name: string): Icon | undefined {
    const foundIcon = this._icons.find(icon => icon.name === name);
    if (!foundIcon) {
      console.error(`Icon with name ${name} not found.`);
    }
    return foundIcon;
  }
}
