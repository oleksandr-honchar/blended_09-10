let tasks = [];

export const getTasks = () => tasks;

export const setTasks = newTasks => {
  tasks = newTasks;
};

export const addTask = task => {
  tasks.push(task);
};

export const deleteTask = id => {
  tasks = tasks.filter(task => task.id !== id);
};
