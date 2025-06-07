/*
  Створи список справ.
  На сторінці є два інпути які має вводиться назва і текст задачі.
  Після натискання на кнопку "Add" завдання додається до списку #task-list.

  У кожної картки має бути кнопка "Delete", щоб можна було
  прибрати завдання зі списку.
  Список із завданнями має бути доступним після перезавантаження сторінки.

  Розмітка картки задачі
  <li class="task-list-item">
      <button class="task-list-item-btn">Delete</button>
      <h3>Заголовок</h3>
      <p>Текст</p>
  </li>
*/

import { refs } from './js/refs.js';
import {
  loadTasks,
  saveTasks,
  loadTheme,
  saveTheme,
} from './js/local-storage-api.js';
import { addTask, getTasks, setTasks } from './js/tasks.js';
import { renderTasks } from './js/render-tasks.js';

// Init tasks
setTasks(loadTasks());
renderTasks();

// Init theme
const currentTheme = loadTheme();
if (currentTheme === 'dark') refs.body.classList.add('dark');

refs.themeToggle.addEventListener('click', () => {
  refs.body.classList.toggle('dark');
  saveTheme(refs.body.classList.contains('dark') ? 'dark' : 'light');
});

refs.form.addEventListener('submit', e => {
  e.preventDefault();

  const title = refs.titleInput.value.trim();
  const desc = refs.descInput.value.trim();

  if (!title || !desc) return;

  const task = {
    id: Date.now().toString(),
    title,
    desc,
  };

  addTask(task);
  saveTasks(getTasks());
  renderTasks();

  refs.form.reset();
});
