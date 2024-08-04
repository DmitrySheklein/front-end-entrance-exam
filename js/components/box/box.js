import './box.css';

export function Box(props) {
  const { children = '', title, className = '', tag = 'div' } = props;

  const Title = title
    ? `<h2 class="box__title" contenteditable>${title}</h2>`
    : '';

  return /* html */ `
   <${tag} class="box ${className}">
    ${Title}
    ${children}
   </${tag}>
   `;
}
