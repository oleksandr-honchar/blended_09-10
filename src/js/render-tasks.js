import { createTaskMarkup } from './markup-tasks.js';

export const renderTasks = (tasks, container) => {
  container.innerHTML = ''; // clear existing
  tasks.forEach(task => {
    const el = createTaskMarkup(task);
    container.appendChild(el);
  });
};
