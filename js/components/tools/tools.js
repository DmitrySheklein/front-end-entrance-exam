import { Box } from '../box/box';
import { ToolsData } from './tools.data';
import './tools.css';

export function Tools() {
  return Box({
    title: 'Tools',
    className: 'box--tools',
    children: /*html*/ `
    <ul class="tools-list">
        ${Object.entries(ToolsData)
          .map(
            ([title, values]) => /*html*/ `
            <li class="tools-item">
                <h3 class="tools-item__title">${title}</h3>
                <ul class="tools-item__list">
                  ${values.map(({ src, name }) => `<img class="tools-item__image" src="${src}" alt="${name}" />`).join('')}                    
                </ul>
            </li>`,
          )
          .join('')}
    </ul>
    `,
  });
}
