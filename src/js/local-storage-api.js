const LS_KEY = 'tasks';
export const addToLocalStorage = array => {
  localStorage.setItem(LS_KEY, JSON.stringify(array));
};

export const getFromLocalStorage = () =>
  JSON.parse(localStorage.getItem(LS_KEY)) || [];
