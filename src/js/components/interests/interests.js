import { Box } from '../box/box';
import { renderList } from '../../utils/renderList';
import { tags } from './interests.data';
import './interests.css';

export function Interests() {
  return Box({
    title: 'Interests',
    tag: 'section',
    className: 'box--interests',
    children: /* html */ `
    <ul class="interests-list">
      ${renderList(tags.map((tag) => `<li class="interests-list__tag" contenteditable>${tag}</li>`))}      
    </ul>
    `,
  });
}
