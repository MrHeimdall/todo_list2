
const addButton = document.getElementById("add-button");
const todoList = document.getElementById("todo-list")
  

addButton.addEventListener("click", addTodo);
 


let index = 0;

function addTodo(){
  const todoInput = document.getElementById('todo-input');
  if(!todoInput.value){
    console.log("tarea vacía");
    return;
  }

  createTodo(todoInput.value);
  todoInput.value = '';

  if(createTodo){
    const editButton = document.getElementById(`edit-buttons${index}`);
    const deleteButton = document.getElementById("delete-button");
    editButton.addEventListener("click", editTodo);
    deleteButton.addEventListener("click", deleteTodo);
  }
  
  index++;
}

function editTodo(){
  const todoChange = prompt("Change your task");
  console.log(todoChange);
}

function deleteTodo(){
  todoList.removeChild(todoList.firstChild);
}

function createTodo(value){
  const saludo = `<div>
    <li class="todo-list">${value}</li>
    <button id="edit-button${index}">Edit</button>
    <button id="delete-button${index}">Delete</button>
    </div>
    `;
  const $list = document.querySelector ('ul');
  $list.insertAdjacentHTML('beforeend', saludo);
}