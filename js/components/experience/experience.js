import { Box } from '../box/box';
import './experience.css';

const jobList = [
  {
    isMostRecent: true,
    date: 'Jun. 2023 - Present',
    role: 'Marketing Manager',
    companyName: 'Pankayam',
    info: 'Full-time',
    points: [
      'Strategy development and planning of campaigns that promote the business and generate genuine traffic',
      'SEO Content Creation for Blogs, Website, Social media',
    ],
  },
  {
    isMostRecent: false,
    date: '2017 - Present',
    role: 'Graphic / Web designer',
    companyName: null,
    info: 'Freelance',
    points: [
      `Development of internal projects from scratch, product design of brands`,
      'Landing page, webapps and hybrid apps',
      'Coordinating with outside agencies, art services, web designer, marketing, printers, and colleagues as necessary.',
    ],
  },
  {
    isMostRecent: false,
    date: 'Sep. 2021 - Jun. 2023',
    role: 'Legal Assistant',
    companyName: 'Law Firm',
    info: 'Intern',
    points: [
      'Provide administrative support to lawyer and enhance office effectiveness',
      'Handle communication with clients, witnesses etc.',
      'repare case briefs and summarize depositions, interrogatories and testimony',
    ],
  },
];

export function Experience() {
  return Box({
    title: 'Experience',
    className: 'box--experience',
    children: /*html*/ `
    <div class="experience-list">
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
    </div>
    `,
  });
}
