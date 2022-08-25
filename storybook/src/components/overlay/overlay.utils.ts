import { ElementPosition, OverlayCreateOptions, OverlayService } from '@aotw/components/src/overlay';

export const customLocation = document.querySelector('#root');

const buttonElement = document.createElement('aotw-button');
buttonElement.innerHTML = 'Click me!';

export function handleElement(e: Event, element?: HTMLElement, position?: ElementPosition): void {
  if (!element) {
    element = buttonElement;
  }

  OverlayService.attach({ element }, position);
}

export function handleExistence(action: 'create' | 'remove', options?: OverlayCreateOptions): void {
  action === 'create' ? OverlayService.create(options) : OverlayService.remove();
  const chips = document.querySelectorAll('aotw-chip');
  chips.forEach(chip => {
    if (chip.className !== 'remove-all') {
      chip.toggleAttribute('disabled')
    }
  });
}

export function handleRemoveAll(): void {
  OverlayService.removeAll();
}