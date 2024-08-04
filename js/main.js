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

document.querySelector('#app').innerHTML = /*html*/ `
  <main class="main">
    ${UserBlock()}
    ${Languages()}
    ${Experience()}
    ${Tools()}
    ${Education()}
    ${Interests()}
    ${Contacts()}
    ${Download()}
  </main>
`;
