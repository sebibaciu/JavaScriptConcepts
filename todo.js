const form = document.querySelector('form');
const taskList = document.querySelector('#task-list');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  const newTaskInput = document.querySelector('#new-task');
  const newTask = newTaskInput.value.trim();
  if (newTask !== '') {
    const newTaskElement = document.createElement('li');
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'X';
    newTaskElement.textContent = newTask;
    newTaskElement.appendChild(deleteButton);
    taskList.appendChild(newTaskElement);
    newTaskInput.value = '';
    deleteButton.addEventListener('click', function() {
      taskList.removeChild(newTaskElement);
    });
  }
});
