// tasks.js
import { refs } from './refs.js';

const tasks = []; // 🧠 Local in-memory state

export function addTask(task) {
  tasks.unshift(task); // keep state in sync
  const li = document.createElement('li');
  li.classList.add('task-item');
  li.dataset.id = task.id;

  li.innerHTML = `
    <div>
      <h3>${task.title}</h3>
      <p>${task.description || ''}</p>
    </div>
    <button class="delete-btn">🗑</button>
  `;

  refs.taskList.prepend(li);
}

export function getTasks() {
  return tasks;
}

export function deleteTask(id) {
  const index = tasks.findIndex(task => task.id === id);
  if (index !== -1) {
    tasks.splice(index, 1);
    const li = refs.taskList.querySelector(`li[data-id="${id}"]`);
    if (li) li.remove();
  }
}
