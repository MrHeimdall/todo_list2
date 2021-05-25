//Traer los elementos y asignarles una variable para trabajr con ellos
const addButton = document.getElementById("add-button");
addButton.addEventListener("click", addTodo);
const todoList = document.getElementById("todo-list-container")
const todoInput = document.getElementById('todo-input');

// Definir la funcion que dispara el boton add
function addTodo(){
  
  // En caso de un input vacio, no se añadirá una tarea nueva.
  if(!todoInput.value){
    console.log("tarea vacía");
    return;
  }
  
  //Funcion que crea toda la estructura de las tareas.
  function createTodo (value){
    
    // Crear un contenedor para todas las tareas.
    const taskContainer = document.createElement('div')
    
    // Crear el contenedor de la tarea y los botones.
    const task = document.createElement('div');
    task.classList.add('todo-list')
    todoList.appendChild(taskContainer);
    
    // Crear el texto de la tarea.
    const taskLabel = document.createElement('li');
    taskLabel.innerText = value;
    
    // Crear botón para editar tarea y añadir estilos.
    const editButtton = document.createElement('button');
    editButtton.innerText ='edit'
    editButtton.classList.add('btn')
    editButtton.classList.add('btn-info')
    
    // Crear botón para eliminar tarea y añadir estilos.
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'delete'
    deleteButton.classList.add('btn')
    deleteButton.classList.add('btn-danger')
    
    // Meter el texto de la tarea y los botones dentro del contenedor.
    task.appendChild(taskLabel);
    task.appendChild(editButtton);
    task.appendChild(deleteButton);
    taskContainer.appendChild(task);
    
    // Las funciones de editar y borrar en sus correspondientes botones.
    editButtton.addEventListener("click", editTodo)
    deleteButton.addEventListener("click", deleteTodo)
    
    // Funcion que borra el contenedor de la tarea 
    function deleteTodo(){
      console.log("borrar tarea")
      task.remove()
    }
    
    // Funcion que permite, a través de un prompt, cambiar el texto de la tarea.
    function editTodo(){
      const todoEdit = prompt("Change your task");
      
      if(!todoEdit){
        alert("Escribe una tarea")
        return;
      }
      taskLabel.innerText = todoEdit;
    }
  };
  
  createTodo(todoInput.value)
  
  todoInput.value = '';
}

// Cansado de darle al botón add para añadir tareas, lo he hecho con el intro XD
const input = document.getElementById("input")
input.addEventListener("keyup", addTodoIntro)
function addTodoIntro(e){
  if(e.keyCode == 13){
    addTodo();
  }
}

