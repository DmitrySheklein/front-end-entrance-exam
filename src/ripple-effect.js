import { addRippleEffect } from './utils/addRippleEffect';

export function initRippleEffect() {
  document.querySelectorAll('[contenteditable]').forEach((element) => {
    element.classList.add('ripple-container');
    element.addEventListener('click', addRippleEffect);
  });
}
