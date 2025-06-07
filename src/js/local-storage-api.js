const TASKS_KEY = 'tasks';
const THEME_KEY = 'theme';

export const loadTasks = () =>
  JSON.parse(localStorage.getItem(TASKS_KEY)) || [];

export const saveTasks = tasks =>
  localStorage.setItem(TASKS_KEY, JSON.stringify(tasks));

export const loadTheme = () => localStorage.getItem(THEME_KEY);

export const saveTheme = theme => localStorage.setItem(THEME_KEY, theme);
