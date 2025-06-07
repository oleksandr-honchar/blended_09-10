import { refs } from './refs.js';
import { deleteTask, getTasks } from './tasks.js';
import { saveTasks } from './localStorageApi.js';

export const renderTasks = () => {
  refs.taskList.innerHTML = '';

  getTasks().forEach(task => {
    const li = document.createElement('li');
    li.textContent = `${task.title}: ${task.desc}`;

    const btn = document.createElement('button');
    btn.textContent = 'Delete';
    btn.onclick = () => {
      deleteTask(task.id);
      saveTasks(getTasks());
      renderTasks();
    };

    li.appendChild(btn);
    refs.taskList.appendChild(li);
  });
};
