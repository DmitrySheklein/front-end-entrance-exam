import html2pdf from 'html2pdf.js';

export async function exportHTMLtoPDF(element) {
  const opt = {
    margin: [0.5, 0.5, 0.5, 0.5],
    filename: 'cv.pdf',
    image: { type: 'jpeg', quality: 1 },
    html2canvas: { scale: 5 },
    jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
  };

  return html2pdf().set(opt).from(element).save();
}
