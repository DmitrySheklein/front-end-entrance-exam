import { Box } from '../box/box';
import './contacts.css';

export function Contacts() {
  return Box({
    className: 'box--contacts',
    children: /* html */ `
    <div class="contacts">
        <h3 class="contacts__title" contenteditable>Let´s chat! I´m ready to work on excinting projects</h3>
        <a class="contacts__email" href="#" contenteditable>srkarthik.designscape@gmail.com</a>    
    </div>
    `,
  });
}
