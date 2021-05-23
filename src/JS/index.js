
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

  function createTodo (value){

    const taskContainer = document.createElement('div')
    const task = document.createElement('div');
    
    todoList.appendChild(taskContainer);
    task.classList.add('todo-list')
        

    const taskLabel = document.createElement('li');
    taskLabel.innerText = value;

    const editButtton = document.createElement('button');
    editButtton.innerText ='edit'
    editButtton.classList.add('btn')
    editButtton.classList.add('btn-info')

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'delete'
    deleteButton.classList.add('btn')
    deleteButton.classList.add('btn-danger')


    task.appendChild(taskLabel);
    task.appendChild(editButtton);
    task.appendChild(deleteButton);
    taskContainer.appendChild(task);
    
    editButtton.addEventListener("click", editTodo)
    deleteButton.addEventListener("click", deleteTodo)
    
    function deleteTodo(){
     console.log("borrar tarea")
     task.remove()
    }

    function editTodo(){
      const todoEdit = prompt("Change your task");
      taskLabel.innerText = todoEdit;
    }
  };
  
  createTodo(todoInput.value)
  todoInput.value = '';

}



