// Select elements
const taskInput = document.getElementById('taskInput');
const addButton = document.getElementById('addButton');
const taskList = document.getElementById('taskList');

// Add event listener for "Add Task" button
addButton.addEventListener('click', function() {
  const taskText = taskInput.value.trim();
  
  // If input is not empty
  if (taskText !== '') {
    // Create a new task item
    const taskItem = document.createElement('li');
    
    // Add the task text to the item
    taskItem.innerHTML = `<span>${taskText}</span><button class="deleteButton">Delete</button>`;
    
    // Append the task item to the task list
    taskList.appendChild(taskItem);
    
    // Clear the input field after adding the task
    taskInput.value = '';
    
    // Add event listener for the delete button
    const deleteButton = taskItem.querySelector('.deleteButton');
    deleteButton.addEventListener('click', function() {
      taskList.removeChild(taskItem);  // Remove task from list
    });
    
    // Add a click event to mark task as completed (strike-through)
    taskItem.addEventListener('click', function() {
      taskItem.classList.toggle('completed');
    });
  }
});
