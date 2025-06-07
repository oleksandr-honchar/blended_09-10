// render-tasks.js
import { refs } from './refs.js';
import { deleteTask, getTasks } from './tasks.js';
import { saveTasks } from './local-storage-api.js';

export const renderTasks = () => {
  refs.taskList.innerHTML = '';

  const tasks = getTasks();

  tasks.forEach(task => {
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

    const deleteBtn = li.querySelector('.delete-btn');
    deleteBtn.addEventListener('click', () => {
      deleteTask(task.id);
      saveTasks(getTasks()); // Update storage after deletion
      renderTasks(); // Re-render UI
    });

    refs.taskList.appendChild(li);
  });
};
