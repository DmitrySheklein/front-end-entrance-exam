import { exportHTMLtoPDF } from './utils/htmlToPDF';
export class EditManager {
  #container = null;
  #btn = null;

  constructor({ container, btn }) {
    this.#container = container;
    this.#btn = btn;
  }

  init() {
    this.download();
  }

  download() {
    this.#btn.addEventListener('click', () => {
      exportHTMLtoPDF(this.#container);
      console.log('download');
    });
  }
}
