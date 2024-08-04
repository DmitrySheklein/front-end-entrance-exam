import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';

export async function exportHTMLtoPDF(element) {
  return html2canvas(element, { scale: 5 }).then((canvas) => {
    const image = canvas.toDataURL('image/png');

    const pdf = new jsPDF({
      orientation: 'p',
      unit: 'px',
      format: 'a4',
      putOnlyUsedFonts: true,
      floatPrecision: 'smart',
    });

    pdf.addImage(image, 'PNG', 0, 0, 445, 625, undefined, 'FAST');

    pdf.save('cv.pdf');
  });
}
