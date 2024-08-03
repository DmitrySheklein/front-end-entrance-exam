import { Box } from './../box/box';
import './languages.css';

export function Languages() {
  return Box({
    title: 'Languages',
    children: /*html*/ `
        <ul class="languages-list">
            <li class="languages-list__item">
                <h3 class="languages-list__title">English</h3>
                <progress class="languages-list__progress" value="90" max="100">90%</progress>
            </li>
            <li class="languages-list__item">               
                <h3 class="languages-list__title">Malayalam</h3>                
                <progress class="languages-list__progress" value="80" max="100">80%</progress>                
            </li>
            <li class="languages-list__item">               
                <h3 class="languages-list__title">Hindi</h3>                
                <progress class="languages-list__progress" value="80" max="100">80%</progress>                
            </li>
        </ul>
        `,
  });
}
