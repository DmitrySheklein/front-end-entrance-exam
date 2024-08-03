import { Box } from '../box/box';

import figmaIcon from '/icons/design/figma.svg';
import adobePhotoshopIcon from '/icons/design/adobe-photoshop.svg';
import adobeIllustratorIcon from '/icons/design/adobe-illustrator.svg';
import adobePremiereIcon from '/icons/design/adobe-premiere.svg';
import notionIcon from '/icons/design/notion.svg';
import meetIcon from '/icons/design/meet.svg';

import zapierIcon from '/icons/no-code/zapier.svg';
import webflowIcon from '/icons/no-code/webflow.svg';
import framerIcon from '/icons/no-code/framer.svg';
import wordpressIcon from '/icons/no-code/wordpress.svg';

import chatGPTIcon from '/icons/ai/chatGPT.svg';
import copilotIcon from '/icons/ai/copilot.svg';
import midjourneyIcon from '/icons/ai/midjourney.svg';

import './tools.css';

const ToolsData = {
  ['design']: [
    { name: 'figma', src: figmaIcon },
    { name: 'adobe-photoshop', src: adobePhotoshopIcon },
    { name: 'adobe-illustrator', src: adobeIllustratorIcon },
    { name: 'adobe-premiere', src: adobePremiereIcon },
    { name: 'notion', src: notionIcon },
    { name: 'meet', src: meetIcon },
  ],
  ['no-code']: [
    { name: 'zapier', src: zapierIcon },
    { name: 'webflow', src: webflowIcon },
    { name: 'framer', src: framerIcon },
    { name: 'wordpress', src: wordpressIcon },
  ],
  ['artoficial intelligence']: [
    { name: 'chatGPT', src: chatGPTIcon },
    { name: 'copilot', src: copilotIcon },
    { name: 'midjourney', src: midjourneyIcon },
  ],
};

export function Tools() {
  return Box({
    title: 'Tools',
    className: 'box--tools',
    children: /*html*/ `
    <ul class="tools-list">
        ${Object.entries(ToolsData)
          .map(
            ([title, values]) => /*html*/ `
            <li class="tools-item">
                <h3 class="tools-item__title">${title}</h3>
                <ul class="tools-item__list">
                  ${values.map(({ src, name }) => `<img class="tools-item__image" src="${src}" alt="${name}" />`).join('')}                    
                </ul>
            </li>`,
          )
          .join('')}
    </ul>
    `,
  });
}
