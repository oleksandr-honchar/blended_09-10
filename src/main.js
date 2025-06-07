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

import { taskForm, taskName, taskDescription } from './js/refs.js'; // Import refs correctly
import { createTask } from './js/tasks.js'; // Import function to create tasks
import { addTasks } from './js/render-tasks.js'; // Function to render tasks
import { getFromLocalStorage } from './js/local-storage-api.js'; // To get tasks from local storage

taskForm.addEventListener('submit', createTask); // Add event listener for form submission

// Fetch tasks from local storage and render them if they exist
const tasks = getFromLocalStorage();
if (tasks.length) {
  addTasks(tasks); // Render tasks if they exist
}
