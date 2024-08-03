import { Box } from '../box/box';
import './interests.css';

const tags = [
  'branding',
  'design',
  'photography',
  'artificial intelligence',
  'illustration',
  'typography',
  'social networks',
  'research',
  'dron pilot',
  'games',
];

export function Interests() {
  return Box({
    title: 'Interests',
    className: 'box--interests',
    children: /* html */ `
    <ul class="interests-list">
      ${tags.map((tag) => `<li class="interests-list__tag">${tag}</li>`).join('')}      
    </ul>
    `,
  });
}
