export function transformCssValue(value?: string | number) {
  if (value === null) {
    return '';
  }
  return typeof value === 'string' ? value : `${value}px`;
}
