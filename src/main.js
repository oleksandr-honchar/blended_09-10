// /*
//   Створи список справ.
//   На сторінці є два інпути які має вводиться назва і текст задачі.
//   Після натискання на кнопку "Add" завдання додається до списку #task-list.

//   У кожної картки має бути кнопка "Delete", щоб можна було
//   прибрати завдання зі списку.
//   Список із завданнями має бути доступним після перезавантаження сторінки.

//   Розмітка картки задачі
//   <li class="task-list-item">
//       <button class="task-list-item-btn">Delete</button>
//       <h3>Заголовок</h3>
//       <p>Текст</p>
//   </li>
// */

// import { taskForm, taskName, taskDescription } from './js/refs.js'; // Import refs correctly
// import { createTask } from './js/tasks.js'; // Import function to create tasks
// import { addTasks } from './js/render-tasks.js'; // Function to render tasks
// import { getFromLocalStorage } from './js/local-storage-api.js'; // To get tasks from local storage

// taskForm.addEventListener('submit', createTask); // Add event listener for form submission

// // Fetch tasks from local storage and render them if they exist
// const tasks = getFromLocalStorage();
// if (tasks.length) {
//   addTasks(tasks); // Render tasks if they exist
// }

const form = document.getElementById('task-form');
const taskList = document.getElementById('task-list');

const TASKS_KEY = 'tasks-data';

// 💾 Load tasks from localStorage
function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem(TASKS_KEY)) || [];
  tasks.forEach(task => renderTask(task));
}

// 💡 Render a single task card
function renderTask({ title, description }) {
  const li = document.createElement('li');
  li.className = 'task-list-item';
  li.innerHTML = `
    <button class="task-list-item-btn">Delete</button>
    <h3>${title}</h3>
    <p>${description}</p>
  `;
  taskList.appendChild(li);

  li.querySelector('button').addEventListener('click', () => {
    li.remove();
    deleteTask(title, description);
  });
}

// ➕ Save a new task
function saveTask(task) {
  const tasks = JSON.parse(localStorage.getItem(TASKS_KEY)) || [];
  tasks.push(task);
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
}

// ❌ Delete task from localStorage
function deleteTask(title, description) {
  let tasks = JSON.parse(localStorage.getItem(TASKS_KEY)) || [];
  tasks = tasks.filter(
    task => task.title !== title || task.description !== description
  );
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
}

// 🚀 Handle form submission
form.addEventListener('submit', e => {
  e.preventDefault();
  const title = form.taskName.value.trim();
  const description = form.taskDescription.value.trim();

  if (!title || !description) return;

  const task = { title, description };
  renderTask(task);
  saveTask(task);
  form.reset();
});

// 🧠 Initial load
loadTasks();
