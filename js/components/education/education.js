import { Box } from '../box/box';
import heartIcon from '/heart.svg';
import { educationList } from './education.data';
import './education.css';

export function Education() {
  return Box({
    title: 'Education',
    className: 'box--education',
    children: /*html*/ `
    <ul class="education-list">
      ${educationList
        .map(({ date, name, schoolName, tags }, idx) => {
          const isFirstItem = idx === 0;

          return Box({
            className: `box--content ${isFirstItem ? 'box--accent' : ''}`,
            children: /* html */ `
              <li class="education-item">
                <header class="education-item__header">
                  <date class="education-item__date">${date}</date>
                  ${isFirstItem ? `<img src="${heartIcon}" class="education-item__icon" alt="Heart" />` : ''}          
                </header>
                <div class="education-item__content">
                  <h3 class="education-item__name">${name}</h3>
                  <ul class="education-item__tags ${isFirstItem ? 'education-item__tags--accent' : ''}">
                    ${tags.map((tag) => `<li class="education-item__tag">#${tag}</li>`).join('')}                  
                  </ul>
                </div>
                <span class="education-item__school-name">${schoolName}</span>
              </li>
            `,
          });
        })
        .join('')}    
    </ul>    
    `,
  });
}
