import { refs } from './refs.js';

export function addTask(task) {
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
