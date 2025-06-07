const TASKS_KEY = 'tasks';

export const getTasks = () => {
  const saved = localStorage.getItem(TASKS_KEY);
  return saved ? JSON.parse(saved) : [];
};

export const saveTasks = tasks => {
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));
};
