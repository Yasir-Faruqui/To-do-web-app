'use strict'
//Selector
const todoInput = document.querySelector('.todo-input');
const subBtn = document.querySelector('.subbtn');
const todoList = document.querySelector('.todo-list');

//Event listeners
subBtn.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//Functions
function addTodo(event) {
  event.preventDefault();

  //Todo Div
  const todoDiv = document.createElement('div'); //div created
  todoDiv.classList.add('todo'); //class created inside tododiv

  //Create LI
  const newTodo = document.createElement('li'); //Li created
  newTodo.innerText = todoInput.value;
  newTodo.classList.add('todo-item'); //Class created inside newTodo
  todoDiv.appendChild(newTodo); //Insweted into todoDiv

  //Check mark button
  const completedButton = document.createElement('button'); //Button created
  completedButton.innerHTML = '<i class="fas fa-check"></i>';
  completedButton.classList.add("complete-btn"); //class created inside completedButton
  todoDiv.appendChild(completedButton); //Insweted into todoDiv

  //Check trash Button
  const trashButton = document.createElement('button'); //Button created
  trashButton.innerHTML = '<i class="fas fa-trash"></i>';
  trashButton.classList.add("trash-btn"); //Class created inside trashButton
  todoDiv.appendChild(trashButton); //Insweted into todoDiv

  //Append to list
  todoList.appendChild(todoDiv);

  //Clear todoInput value
  todoInput.value = "";
}

//function deleteCheck
function deleteCheck(e) {
  const item = e.target;

  //Delete TODO
  if (item.classList[0] === "trash-btn") {
    const todo = item.parentElement;
    todo.remove();
  }
  //Check mark
  if (item.classList[0] === "complete-btn") {
    const todo = item.parentElement;
    todo.classList.toggle("completed");
  }
}
