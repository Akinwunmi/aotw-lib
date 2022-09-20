export function transformCssValue(value?: string | number) {
  if (value === null) {
    return '';
  }
  return typeof value === 'string' ? value : `${value}px`;
}

export function applyStyles(destination: CSSStyleDeclaration, source: CSSStyleDeclaration) {
  for (const key in source) {
    if (Object.prototype.hasOwnProperty.call(source, key)) {
        destination[key] = source[key];
    }
  }
  return destination;
}
