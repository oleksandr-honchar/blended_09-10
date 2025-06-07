import { refs } from './refs.js';

refs.themeToggleBtn.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
