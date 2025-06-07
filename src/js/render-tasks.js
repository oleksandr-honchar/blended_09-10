import { createMarkup } from './markup-tasks.js';

export const addTasks = tasks => {
  const taskList = document.querySelector('#task-list'); // Make sure the selector is correct
  taskList.innerHTML = ''; // Clear the existing list

  tasks.forEach(task => {
    taskList.insertAdjacentHTML('beforeend', createMarkup(task)); // Add the new tasks to the list
  });
};
