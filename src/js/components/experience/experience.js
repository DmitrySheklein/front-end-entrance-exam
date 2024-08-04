import { Box } from '../box/box';
import { renderList } from '../../utils/renderList';
import { jobList } from './experience.data';
import './experience.css';

export function Experience() {
  return Box({
    title: 'Experience',
    tag: 'section',
    className: 'box--experience',
    children: /*html*/ `
    <ul class="experience-list">
      ${renderList(
        jobList.map(
          ({
            isMostRecent,
            date: [dateFrom, dateTo],
            dateTime: [dateTimeFrom, dateTimeTo],
            role,
            companyName,
            info,
            points,
          }) =>
            Box({
              tag: 'li',
              className: `box--content ${isMostRecent ? 'box--accent' : ''}`,
              children: /* html */ `
              <div class="experience-item">
                <header class="experience-item__header">
                  <span class="experience-item__date">
                    <time datetime="${dateTimeFrom}" contenteditable>${dateFrom}</time>
                    - 
                    <time datetime="${dateTimeTo}" contenteditable>${dateTo}</time>                  
                  </span>
                  ${isMostRecent ? `<sup class="experience-item__tag contenteditable" contenteditable>most-recent</sup>` : ''}                
                </header>

                <div class="experience-item__content">
                  <div class="experience-item__info">
                    <h3 class="experience-item__role" contenteditable>${role}</h3>
                    <span class="experience-item__about ${isMostRecent ? 'experience-item__about--accent' : ''}" contenteditable>
                      ${companyName ? `${companyName}<span class="experience-item__delimetr">|</span>` : ''}${info}
                    </span>
                  </div>
                  <ul class="experience-item__list">
                    ${renderList(points.map((point) => `<li class="experience-item__list-item" contenteditable>${point}</li>`))}                  
                  </ul>
                </div>
              </div>
            `,
            }),
        ),
      )}
    </ul>
    `,
  });
}
