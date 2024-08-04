import { Box } from './../box/box';
import './languages.css';

const data = [
  { title: 'English', value: 100 },
  { title: 'Malayalam', value: 100 },
  { title: 'Hindi', value: 80 },
];

export function Languages() {
  return Box({
    tag: 'section',
    className: 'box--languages',
    title: 'Languages',
    children: /*html*/ `
        <ul class="languages-list">
            ${data
              .map(
                ({ title, value }) => /*html*/ `
                <li class="languages-list__item">
                    <h3 class="languages-list__title" contenteditable>${title}</h3>
                    <progress class="languages-list__progress" value="${value}" max="100">${value}%</progress>
                </li>`,
              )
              .join('')}
        </ul>
        `,
  });
}
