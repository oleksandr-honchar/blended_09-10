import { createMarkup } from './markup-tasks.js';
import { tasksList } from './refs.js';

export const addTask = task => {
  tasksList.insertAdjacentHTML('beforeend', createMarkup(task));
};

export const addTasks = tasks => {
  tasksList.insertAdjacentHTML('beforeend', tasks.map(createMarkup).join(''));
};
