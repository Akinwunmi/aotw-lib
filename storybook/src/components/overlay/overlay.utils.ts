import { AotwCard } from '@aotw/components/src/card';
import { Overlay } from '@aotw/components/src/overlay/overlay';
import { OverlayConfig } from '@aotw/components/src/overlay/overlay.model';

const overlay = Overlay.get();

// * Dialog
const dialogConfig: OverlayConfig = {
  scrimWithBackground: true,
};
const dialogRef = overlay.create(dialogConfig);

export function openDialog(templateId: string): void {
  const element = document.getElementById(templateId) as AotwCard;
  dialogRef.attach(element);
}

export function closeDialog(): void {
  dialogRef.close();
}

// * Dropdown
const dropdownPosition = overlay.position();
dropdownPosition.setPositions({
  relative: {
    side: 'right',
    startingPoint: 'start'
  },
});
const dropdownConfig: OverlayConfig = {
  position: dropdownPosition || undefined,
  scrim: true
};
const dropdownRef = overlay.create(dropdownConfig);

export function openDropdown(templateId: string): void {
  const element = document.getElementById(templateId) as HTMLDivElement;
  const origin = document.getElementById('button-dropdown');

  if (origin) {
    dropdownPosition.setOrigin(origin);
  }
  const attached = dropdownRef.attach(element);

  const items = attached.querySelectorAll('aotw-list-item') as NodeListOf<HTMLElement>;
  items.forEach((item, index) => {
    item.addEventListener('click', selectItem.bind(this, items, index));
  });
}

function selectItem(items: HTMLElement[], index: number): void {
  items.forEach(item => {
    item.toggleAttribute('active', item === items[index]);
  });
  dropdownRef.close();
}

// * Toast
const toastPosition = overlay.position();
toastPosition.setPositions({
  absolute: {
    horizontal: 'left',
    vertical: 'bottom',
  },
  offset: {
    x: 16,
    y: -16,
  }
});
const toastConfig: OverlayConfig = {
  position: toastPosition,
};
const toastRef = overlay.create(toastConfig);

export function openToast(templateId: string): void {
  const element = document.getElementById(templateId) as HTMLDivElement;

  toastRef.attach(element);
  setTimeout(() => {
    toastRef.close();
  }, 3000);
}
