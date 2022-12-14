import { Overlay } from '@aotw/components/src/overlay/overlay';
import { OverlayConfig } from '@aotw/components/src/overlay/overlay.model';

const overlay = Overlay.getInstance();

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

export function handleOpenDialog(templateId: string): void {
  const template = document.getElementById(templateId) as HTMLTemplateElement;
  dialogRef.attach(template);
}

export function handleOpenDropdown(templateId: string): void {
  const template = document.getElementById(templateId) as HTMLTemplateElement;
  const origin = document.getElementById('button-dropdown');

  if (origin) {
    dropdownPosition.setOrigin(origin);
  }
  dropdownRef.attach(template);
}

export function handleOpenToast(templateId: string): void {
  const template = document.getElementById(templateId) as HTMLTemplateElement;
  toastRef.attach(template);
  setTimeout(() => {
    toastRef.detach();
  }, 3000);
}
