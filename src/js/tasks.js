import { taskName, taskDescription } from './refs.js'; // Import references

export const createTask = event => {
  event.preventDefault(); // Prevent default form submission

  const task = {
    id: Date.now(), // Use current timestamp as task ID
    title: taskName.value.trim(), // Get title from taskName input
    description: taskDescription.value.trim(), // Get description from taskDescription input
  };

  // Code to save this task to local storage or render it to the page
};
