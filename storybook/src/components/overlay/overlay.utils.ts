import { ElementPosition, OverlayConfig, Overlay } from '@aotw/components/src/overlay';
import { OverlayRef } from '@aotw/components/src/overlay/overlay-ref';

const buttonElement = document.createElement('aotw-button');
buttonElement.innerHTML = 'Click me!';

export function handleCreate(config: OverlayConfig): void {
  const overlayConfig = new OverlayConfig(config);

  Overlay.create(overlayConfig);
  getChips().forEach(chip =>
    chip.toggleAttribute('disabled', !!(chip.className === 'close' || chip.className === 'create'))
  );
}

export function handleOpen(e: Event, element?: HTMLElement, position?: ElementPosition): void {
  if (!element) {
    element = buttonElement;
  }

  OverlayRef.attach(element);
  getChips().forEach(chip => {
    if (chip.className === 'close') {
      chip.toggleAttribute('disabled', false);
    }
    if (chip.className === 'open') {
      chip.toggleAttribute('disabled', true);
    }
  });
}

export function handleClose(): void {
  OverlayRef.detach();
  getChips().forEach(chip => {
    if (chip.className === 'close') {
      chip.toggleAttribute('disabled', true);
    }
    if (chip.className === 'open') {
      chip.toggleAttribute('disabled', false);
    }
  });
}

export function handleRemove(): void {
  OverlayRef.remove();
  getChips().forEach(chip => 
    chip.toggleAttribute('disabled', chip.className !== 'create' || false)
  );
}

function getChips(): NodeListOf<Element> {
  return document.querySelectorAll('aotw-chip');
}
