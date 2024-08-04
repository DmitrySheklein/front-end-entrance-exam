import { exportHTMLtoPDF } from './utils/htmlToPDF';

export function setupDownloadPDF({ btn, container }) {
  btn.addEventListener('click', async (evt) => {
    const btnElement = evt.target;
    try {
      btnElement.textContent = 'Загрузка...';
      await exportHTMLtoPDF(container);
      btnElement.textContent = 'Скачать';
    } catch (error) {
      btnElement.textContent = 'Скачать';
      throw error;
    }
  });
}
