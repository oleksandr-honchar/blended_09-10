import { refs } from './refs.js';

refs.btnChangeTheme.addEventListener('click', () => {
  document.body.classList.toggle('dark');
});
