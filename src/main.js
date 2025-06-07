import { getFromLocalStorage } from './js/local-storage-api.js';
import { taskForm } from './js/refs.js';
import { createTask } from './js/tasks.js';
import { addTasks } from './js/render-tasks.js';

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

taskForm.addEventListener('submit', createTask);

const tasks = getFromLocalStorage();
if (tasks.length) {
  addTasks(tasks);
}
