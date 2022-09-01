import { ElementPosition, OverlayConfig, AotwOverlay } from '@aotw/components/src/overlay';
import { AotwOverlayRef } from '@aotw/components/src/overlay/overlay-ref';

export const customLocation = document.querySelector('#root') as HTMLDivElement;

const buttonElement = document.createElement('aotw-button');
buttonElement.innerHTML = 'Click me!';

export function handleClose(): void {
  AotwOverlayRef.detach();
  getChips().forEach(chip => {
    if (chip.className === 'close') {
      chip.toggleAttribute('disabled', true);
    }
    if (chip.className === 'open') {
      chip.toggleAttribute('disabled', false);
    }
  });
}

export function handleOpen(e: Event, element?: HTMLElement, position?: ElementPosition): void {
  if (!element) {
    element = buttonElement;
  }

  AotwOverlayRef.attach(element);
  getChips().forEach(chip => {
    if (chip.className === 'close') {
      chip.toggleAttribute('disabled', false);
    }
    if (chip.className === 'open') {
      chip.toggleAttribute('disabled', true);
    }
  });
}

export function handleCreate(config: OverlayConfig): void {
  AotwOverlay.create(config);
  getChips().forEach(chip =>
    chip.toggleAttribute('disabled', !!(chip.className === 'close' || chip.className === 'create'))
  );
}

export function handleRemove(): void {
  AotwOverlayRef.remove();
  getChips().forEach(chip => 
    chip.toggleAttribute('disabled', chip.className !== 'create' || false)
  );
}

function getChips(): NodeListOf<Element> {
  return document.querySelectorAll('aotw-chip');
}
