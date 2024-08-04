import '../css/main-colors.css';
import '../css/style.css';
import { UserBlock } from './components/user-block/user-block';
import { Languages } from './components/languages/languages';
import { Experience } from './components/experience/experience';
import { Tools } from './components/tools/tools';
import { Education } from './components/education/education';
import { Interests } from './components/interests/interests';
import { Contacts } from './components/contacts/contacts';
import { Download } from './components/download/download';
import { setupDownloadPDF } from './download-pdf';

document.querySelector('#app').innerHTML = /*html*/ `
  <main class="main" id="main">
    ${UserBlock()}
    ${Languages()}
    ${Experience()}
    ${Tools()}
    ${Education()}
    ${Interests()}
    ${Contacts()}   
  </main>
  ${Download()}
`;

setupDownloadPDF({
  container: document.querySelector('#main'),
  btn: document.querySelector('#download-btn'),
});
