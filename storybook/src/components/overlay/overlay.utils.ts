import { AotwCard } from '@aotw/components/src/card';
import { Overlay } from '@aotw/components/src/overlay/overlay';
import { OverlayRef } from '@aotw/components/src/overlay/overlay-ref';
import { OverlayConfig } from '@aotw/components/src/overlay/overlay.model';

const overlay = Overlay.get();

// * Dialog
const dialogConfig: OverlayConfig = {
  scrimWithBackground: true,
};
let dialogRef: OverlayRef;

export function openDialog(templateId: string): void {
  dialogRef = overlay.create(dialogConfig);
  const element = document.getElementById(templateId) as AotwCard;
  dialogRef.open(element);
}

export function closeDialog(): void {
  dialogRef.close();
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
let toastRef: OverlayRef;

export function openToast(templateId: string): void {
  toastRef = overlay.create(toastConfig);
  const element = document.getElementById(templateId) as HTMLDivElement;

  toastRef.open(element);
  setTimeout(() => {
    toastRef.close();
  }, 3000);
}
