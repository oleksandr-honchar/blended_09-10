// tasks.js
let tasks = [];

export function setTasks(newTasks) {
  tasks = newTasks;
}

export function getTasks() {
  return tasks;
}

export function addTask(task) {
  tasks.unshift(task);
  // your DOM logic here
}

export function deleteTask(id) {
  tasks = tasks.filter(task => task.id !== id);
}
