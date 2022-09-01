import { ElementPosition, OverlayConfig, OverlayService } from '@aotw/components/src/overlay';
import { OverlayRef } from '@aotw/components/src/overlay/overlay-ref';

export const customLocation = document.querySelector('#root') as HTMLDivElement;

const buttonElement = document.createElement('aotw-button');
buttonElement.innerHTML = 'Click me!';

export function handleElement(e: Event, element?: HTMLElement, position?: ElementPosition): void {
  if (!element) {
    element = buttonElement;
  }

  // OverlayService.attach({ element }, position);
  OverlayRef.attach(element);
}

export function handleExistence(action: 'create' | 'remove', config: OverlayConfig): void {
  // action === 'create' ? OverlayService.create(options) : OverlayService.remove();
  OverlayService.create(config);
  const chips = document.querySelectorAll('aotw-chip');
  chips.forEach(chip => {
    if (chip.className !== 'remove-all') {
      chip.toggleAttribute('disabled')
    }
  });
}

export function handleRemoveAll(): void {
  // OverlayService.removeAll();
}