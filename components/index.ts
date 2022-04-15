const chipWithText = document.querySelector('#chip');
chipWithText.addEventListener('click', () => {
  createChip('Chip');
});

const chipWithIcon = document.querySelector('#chip-icon');
chipWithIcon.addEventListener('click', () => {
  createChip('', 'logo');
});

const chipWithIconAndText = document.querySelector('#chip-icon-and-text');
chipWithIconAndText.addEventListener('click', () => {
  createChip('Chip', 'check');
});

const deletableChipWithText = document.querySelector('#deletable-chip');
deletableChipWithText.addEventListener('click', () => {
  createChip('Deletable', '', true);
});

function createChip(text: string, icon?: string, deletable?: boolean) {
  const chip = document.createElement('aotw-chip');
  if (text.length) {
    chip.innerHTML = text;
  }
  if (icon && icon.length) {
    chip.setAttribute('icon', icon);
  }
  if (deletable) {
    chip.toggleAttribute('deletable');
  }
  const main = document.body.querySelector('main');
  main.appendChild(chip);
}