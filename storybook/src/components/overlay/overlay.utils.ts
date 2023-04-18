import { Overlay } from '@aotw/components/src/overlay/overlay';
import { OverlayConfig } from '@aotw/components/src/overlay/overlay.model';

const overlay = Overlay.get();

const dialogConfig: OverlayConfig = {
  scrimWithBackground: true,
};
const dialogRef = overlay.create(dialogConfig);

const dropdownPosition = overlay.position();
dropdownPosition.setPositions({
  relative: {
    horizontal: 'end',
    vertical: 'end',
  },
});
const dropdownConfig: OverlayConfig = {
  position: dropdownPosition || undefined,
  scrim: true,
};
const dropdownRef = overlay.create(dropdownConfig);

const toastPosition = overlay.position();
toastPosition.setPositions({
  absolute: {
    horizontal: 'start',
    vertical: 'end',
  },
  offset: {
    x: 16,
    y: -16,
  },
});
const toastConfig: OverlayConfig = {
  position: toastPosition,
};
const toastRef = overlay.create(toastConfig);

export function openDialog(templateId: string): void {
  const template = document.getElementById(templateId) as HTMLTemplateElement;
  const clone = template.content.cloneNode(true) as HTMLElement;
  const attached = dialogRef.attach(clone);

  const closeButton = attached.querySelector('[header-suffix]');
  const cancelButton = attached.querySelector('.cancel');
  closeButton?.addEventListener('click', closeDialog);
  cancelButton?.addEventListener('click', closeDialog);
}

function closeDialog(): void {
  dialogRef.close();
}

export function openDropdown(templateId: string): void {
  const template = document.getElementById(templateId) as HTMLTemplateElement;
  const clone = template.content.cloneNode(true) as HTMLElement;
  const origin = document.getElementById('button-dropdown');

  if (origin) {
    dropdownPosition.setOrigin(origin);
  }
  const attached = dropdownRef.attach(clone);

  const items = attached.querySelectorAll('aotw-list-item') as NodeListOf<HTMLElement>;
  items.forEach((item, index) => {
    item.addEventListener('click', selectItem.bind(undefined, items, index));
  });
}

function selectItem(items: HTMLElement[], index: number): void {
  items.forEach(item => {
    item.toggleAttribute('active', item === items[index]);
  });
  dropdownRef.close();
}

export function openToast(templateId: string): void {
  const template = document.getElementById(templateId) as HTMLTemplateElement;
  const clone = template.content.cloneNode(true) as HTMLElement;
  toastRef.attach(clone);
  setTimeout(() => {
    toastRef.close();
  }, 3000);
}
