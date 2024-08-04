import avatar from '/avatar.svg';
import { Box } from '../box/box';
import './user-block.css';

export function UserBlock() {
  return /* html */ `
    ${Box({
      className: 'box--avatar',
      children: /*html*/ `
      <img src="${avatar}" class="avatar" alt="Karthik SR" />
      `,
    })}
    
    ${Box({
      tag: 'section',
      className: 'box--user',
      children: /*html*/ `
      <div class="user">
        <span class="user__message" contenteditable>Hello 👋🏻 I’m </span>
        <div class="user__info">
            <h2 class="user__name" contenteditable>Karthik SR</h2>
            <strong class="user__role" contenteditable>UX/UI Designer</strong>
        </div>
      </div>
      `,
    })}
    `;
}
