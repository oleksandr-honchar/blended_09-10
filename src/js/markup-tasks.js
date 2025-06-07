export const createTaskMarkup = ({ title, description }) => {
  const li = document.createElement('li');
  li.className = 'task-list-item';
  li.innerHTML = `
    <button class="task-list-item-btn">Delete</button>
    <h3>${title}</h3>
    <p>${description}</p>
  `;
  return li;
};
