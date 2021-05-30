export function ejemplo(){
  alert("funciona")
}

export class Todo {
  constructor(title, id){
    this.title = title,
    this.id = id,
    this.checked
  }
  
  toHtml() {
      return `
        <li class="list-group-item" id="${this.id}">
          <div class="row align-items-center">
            <div class="col">
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="todo-${this.id}">
                <label class="form-check-label" for="todo-${this.id}">
                  ${this.title}
                </label>
              </div>
            </div>
            <div class="col todo-actions" >
              <button class="btn btn-info me-1" id="edit-${this.id}">Editar</button>
              <button class="btn btn-danger" id="delete-${this.id}">Eliminar</button>
            </div>
          </div>
        </li>
      `;
    }
}


