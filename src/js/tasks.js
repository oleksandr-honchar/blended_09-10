// tasks.js
import { taskName, taskDescription } from './render-tasks.js';
import { addTask } from './render-tasks.js'; // Assuming addTask is a function that adds tasks to the UI
import { addToLocalStorage, getFromLocalStorage } from './local-storage-api.js';

export const createTask = event => {
  event.preventDefault();

  const task = {
    id: Date.now(), // Unique ID for each task
    title: taskName.value.trim(), // Task name from input
    description: taskDescription.value.trim(), // Task description from input
  };

  if (!task.title || !task.description) return; // Prevent creating empty tasks

  // Add task to UI
  addTask(task);

  // Get current tasks from local storage
  const data = getFromLocalStorage();
  data.push(task);

  // Save tasks back to local storage
  addToLocalStorage(data);

  // Clear input fields after submission
  taskName.value = '';
  taskDescription.value = '';
};
