import { Meta } from '@storybook/web-components';
import { html, TemplateResult } from 'lit';

import './colors.stories.scss';

export default {
  title: 'Core/Colors'
} as Meta;

const defaultColorRange = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900];
const palette = {
  'primary': [50, 100, 300, 400, 500, 700, 900],
  'secondary': [50, 100, 200, 300, 400, 500, 700, 900],
  'tertiary': [300, 400, 500],
  'success': [500],
  'error': [500],
  'warning': [500]
};

function setColorRange(name: string): TemplateResult {
  return html`
    <div class="palette_color-range">
      <p class="palette_color-range__name">${name}</p>
      <div class="palette_color-range__values">
        ${palette[name].map(value =>
          html`<div class="${name}_${value}"></div>`
        )}
      </div>
    </div>
  `;
};

export const Palette = () => {
  return html`
    <div class="palette">
      <div class="palette_grid">
        ${Object.keys(palette).map(() =>
          html`
            <div class="palette_grid__row">
              ${[...Array(10)].map(() =>
                html`<div></div>`
              )}
            </div>
          `
        )}
      </div>
      <div class="palette_header">
        ${defaultColorRange.map(value => 
          html`<p>${value}</p>`
        )}
      </div>
      ${Object.keys(palette).map(color =>
        setColorRange(color)
      )}
    </div>
  `
};