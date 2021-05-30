//import {Todo} from './todo.model.js'
//import { v4 as uuid } from 'uuid';
//const { v4: uuid } = require('uuid');
//console.log(Todo)
const addButton = document.getElementById("add-button");
addButton.addEventListener("click", addTodo);
const todoList = document.getElementById("todo-list-container");
const todoInput = document.getElementById('todo-input');

let todoArray =[]
let index = Math.floor(Math.random() * 999999)
let renderArray = []

function renderList(){
  renderArray = JSON.parse(localStorage.getItem('todoArray'));
  
  // console.log(renderArray)
  // console.log(todoArray)
  function printHtml(tarea){
    const object = `
    <div id="${tarea.id}" class="todo-list">
      <li>${tarea.title}</li>
      <button id="${tarea.id}" class="btn btn-info">Edit</button>
      <button id="delete_${tarea.id}" class="btn btn-danger">Delete</button>
    </div>
    `
    //console.log(tarea.id)
    const $todoListContainer = document.querySelector('ul')
    $todoListContainer.insertAdjacentHTML('beforeend', object) 
    const taskRendered = document.getElementById(`${tarea.id}`)
    const deleteButton = document.getElementById(`delete_${tarea.id}`)
    

    function deleteRenderTodo(){
      //console.log(taskRendered.id)
      taskRendered.classList.add('delete')
      setTimeout(function(){
        taskRendered.remove()
      },900)
      console.log(todoArray)

      renderArray = renderArray.filter((item) => item.id !== taskRendered.id)
      
      localStorage.setItem('todoArray', JSON.stringify(renderArray))
    }
    
    addListeners();
    
    function addListeners(){
      deleteButton.addEventListener('click', deleteRenderTodo)
    }
  }
  
  
  renderArray.map(element => {
    printHtml(element),
    todoArray.push(element)
    
  })

  
  
}

function addTodo(){
  
  if(!todoInput.value){
    console.log("tarea vacía");
    return;
  }
  
  function createTodo (value){
    
    const taskContainer = document.createElement(`div`);
    
    const task = document.createElement('div');
    task.id=`${index}`;
    task.classList.add('todo-list');
    todoList.appendChild(taskContainer);
    
    const taskLabel = document.createElement('li');
    taskLabel.innerText = value;
    
    const editButtton = document.createElement('button');
    editButtton.innerText ='edit';
    editButtton.classList.add('btn');
    editButtton.classList.add('btn-info');
    
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'delete';
    deleteButton.classList.add('btn');
    deleteButton.classList.add('btn-danger');
    
    task.appendChild(taskLabel);
    task.appendChild(editButtton);
    task.appendChild(deleteButton);
    taskContainer.appendChild(task);
    
    editButtton.addEventListener("click", editTodo);
    deleteButton.addEventListener("click", deleteTodo);

    const tarea = {
      title: value,
      id: `tarea Numero ${index}`
    }
    //console.log(`Se ha creado la ${tarea.id}`)
    
    
    function deleteTodo(){
      //console.log("borrar tarea");
      task.classList.add('delete');
      setTimeout(function(){
        task.remove()
      },900)
      //console.log(task)
      
      todoArray = todoArray.filter((item) => item.id !== tarea.id ,)
      localStorage.setItem('todoArray', JSON.stringify(todoArray))

    }
   

    todoArray.push(tarea)
   
    localStorage.setItem('todoArray',JSON.stringify(todoArray))
    //console.log(todoArray)
    
    
    function editTodo(){
      const todoEdit = prompt("Change your task");
      
      if(!todoEdit){
        alert("Write a task");
        return;
      }
      taskLabel.innerText = todoEdit;
    }
  };
  
  createTodo(todoInput.value);
  
  todoInput.value = '';
  index++


}


const input = document.getElementById("input");
input.addEventListener("keyup", addTodoIntro);

function addTodoIntro(e){
  if(e.keyCode == 13){
    addTodo();
  }
}

renderList()