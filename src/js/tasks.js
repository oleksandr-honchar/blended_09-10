export const createTask = event => {
  event.preventDefault();

  const form = event.currentTarget;
  const title = form.elements.title.value.trim();
  const description = form.elements.description.value.trim();

  if (!title) {
    alert('Please enter a task title');
    return;
  }

  const task = {
    id: Date.now(),
    title,
    description,
  };

  const markup = createMarkup(task);
  tasksList.insertAdjacentHTML('beforeend', markup);

  form.reset();
  saveTasksToLocalStorage();
};
