import '../css/main-colors.css';
import '../css/style.css';
import { UserBlock } from './components/user-block/user-block';
import { Languages } from './components/languages/languages';

document.querySelector('#app').innerHTML = /*html*/ `
  <main class="main">
    ${UserBlock()}
    ${Languages()}
  </main>
`;
