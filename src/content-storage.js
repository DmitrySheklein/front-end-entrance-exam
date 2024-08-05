export function contentStorage() {
  const editableElements = document.querySelectorAll('[contenteditable]');

  function saveContent(evt) {
    const element = evt.target;
    const id = element.dataset.id;

    localStorage.setItem(id, element.innerText);
  }

  function loadPageContent() {
    editableElements.forEach((element, idx) => {
      element.dataset.id = idx;

      const content = localStorage.getItem(idx);
      if (content || content === '') {
        element.textContent = content;
      }
    });
  }

  document.addEventListener('input', saveContent);
  document.addEventListener('DOMContentLoaded', loadPageContent);
}
