import './box.css';

export function Box(props) {
  const { children = '', title, className = '' } = props;

  const Title = title ? `<h2 class="box__title">${title}</h2>` : '';

  return /* html */ `
   <section class="box ${className}">
    ${Title}
    ${children}
   </section>
   `;
}
