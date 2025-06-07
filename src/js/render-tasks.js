import { createMarkup } from './markup-tasks.js';
import { tasksList } from './refs.js';

const addTask = task => {
  tasksList.insertAdjacentHTML('beforeend', createMarkup(task));
};
