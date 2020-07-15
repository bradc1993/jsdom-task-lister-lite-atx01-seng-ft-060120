document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const list = document.getElementById('tasks');
  const taskForm = document.querySelector('form#create-task-form');
  taskForm.addEventListener('submit', (event) => {
    let listElement = document.createElement('li');
    let input = taskForm.elements[0];    
    listElement.innerText = input.value;

    list.appendChild(listElement);

    event.preventDefault();
    }
  )
});
