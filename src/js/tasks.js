export const headerFormBtn = document.querySelector('.header-form-btn');
export const headerForm = document.querySelector('.header-form');

import {
  headerTaskName,
  headerTaskDescription,
  addTask,
  tasksList,
} from './render-tasks.js';

import { createMarkup } from './markup-tasks.js';
import { addToLocalStorage, getFromLocalStorage } from './local-storage-api.js';

export const createTask = event => {
  event.preventDefault();

  addTask({
    id: Date.now(),
    title: taskName.value.trim(),
    description: taskDescription.value.trim(),
  });

  taskName.value = '';
  taskDescription.value = '';
  taskName.focus();

  const data = getFromLocalStorage();
  data.push(task);
  addToLocalStorage(data);
};
