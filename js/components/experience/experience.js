import { Box } from '../box/box';
import { jobList } from './experience.data';
import './experience.css';

export function Experience() {
  return Box({
    title: 'Experience',
    className: 'box--experience',
    children: /*html*/ `
    <ul class="experience-list">
      ${jobList
        .map(({ isMostRecent, date, role, companyName, info, points }) =>
          Box({
            className: `box--content ${isMostRecent ? 'box--accent' : ''}`,
            children: /* html */ `
              <li class="experience-item">
                <header class="experience-item__header">
                  <date class="experience-item__date">${date}</date>
                  ${isMostRecent ? `<sup class="experience-item__tag">most-recent</sup>` : ''}                
                </header>

                <div class="experience-item__content">
                  <div class="experience-item__info">
                    <h3 class="experience-item__role">${role}</h3>
                    <span class="experience-item__about ${isMostRecent ? 'experience-item__about--accent' : ''}">
                      ${companyName ? `${companyName}<span class="experience-item__delimetr">|</span>` : ''}${info}
                    </span>
                  </div>
                  <ul class="experience-item__list">
                    ${points.map((point) => `<li class="experience-item__list-item">${point}</li>`).join('')}                  
                  </ul>
                </div>
              </li>
            `,
          }),
        )
        .join('')}    
    </ul>
    `,
  });
}
