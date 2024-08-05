import { Box } from '../box/box';
import { ToolsData } from './tools.data';
import { renderList } from '../../utils/renderList';
import './tools.css';

export function Tools() {
  return Box({
    title: 'Tools',
    tag: 'section',
    className: 'box--tools',
    children: /*html*/ `
    <ul class="tools-list">
        ${renderList(
          Object.entries(ToolsData).map(
            ([title, values]) => /*html*/ `
            <li class="tools-item">
                <h3 class="tools-item__title" contenteditable>${title}</h3>
                <ul class="tools-item__list">
                  ${renderList(values.map(({ src, name }) => `<li class="tools-item__image-wrap"><img class="tools-item__image" src="${src}" alt="${name}" /></li>`))}
                </ul>
            </li>`,
          ),
        )}
    </ul>
    `,
  });
}
