
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('addTaskBtn').addEventListener('click', function () {
    const ul = document.getElementById('taskList');
    const newTask = document.createElement('li');
    newTask.textContent = 'Nueva tarea';
    ul.appendChild(newTask);
  });

})