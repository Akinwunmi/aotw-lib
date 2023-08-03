import { html } from 'lit';
import { Portal } from '@aotw/components/src/portal';

import { Story } from '../../../types/story.model';

let attached: HTMLElement;

const portal = new Portal();

function attachElement(): void {
  const parent = document.getElementById('portal-parent') as HTMLDivElement;
  const element = document.getElementById('portal-element') as HTMLButtonElement;
  attached = portal.attach(element, { parent });
}

function closeElement(): void {
  portal.close();
}

function detachElement(): void {
  portal.detach();
}

function changeBackgroundColor(color: string): void {
  attached.innerText = `${color[0].toUpperCase() + color.slice(1)} button`;
  attached.style.backgroundColor = color;
}

export const PortalTemplate: Story<Record<string, never>> = () => {
  return html`
    <div style="display: flex; gap: var(--aotw-space-s)">
      <button @click=${attachElement.bind(undefined)}>Attach element</button>
      <button @click=${closeElement.bind(undefined)}>Close element</button>
      <button @click=${detachElement.bind(undefined)}>Detach element</button>
      <button @click=${changeBackgroundColor.bind(undefined, 'red')}>Change background color</button>
    </div>

    <div style="margin-top: var(--aotw-space-m)">
      Portal parent
      <div
        id="portal-parent"
        style="border: 1px dashed var(--aotw-color-grey-400); min-height: var(--aotw-size-l)"
      ></div>
    </div>

    <button id="portal-element" style="display: none" @click=${changeBackgroundColor.bind(undefined, 'green')}>Blue button</button>
  `;
};
