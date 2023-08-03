import { PositionStyle } from './overlay-position.model';

export function transformStyle(style: PositionStyle): string[][] {
  return Object.entries(style).map(([key, value]) => {
    if (value === null) {
      return [key, ''];
    }
    return [key, typeof value === 'string' ? value : `${value}px`];
  });
}

export function transformCssValue(value?: string | number): string {
  if (value === null) {
    return '';
  }
  return typeof value === 'string' ? value : `${value}px`;
}
