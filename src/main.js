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

import { createMarkup } from './js/markup-tasks.js';
import {
  getFromLocalStorage,
  addToLocalStorage,
} from './js/local-storage-api.js';
import { taskForm, taskName, taskDescription } from './js/refs.js';
import { createTask } from './js/tasks.js';
import { addTasks } from './js/render-tasks.js';

taskForm.addEventListener('submit', createTask);

const tasks = getFromLocalStorage(); // Fetch tasks from local storage
if (tasks.length) {
  addTasks(tasks); // Render tasks if they exist
}
