import { Injectable } from '@angular/core';
import { ITodo } from './Models/itodo';

@Injectable({
  providedIn: 'root'
})
export class TodosService {

  constructor() {}
  todos: ITodo[] =[]
  todoUrl:string =  "http://localhost:3000/Todo";

 getAll():Promise<ITodo[]>{
  return  fetch(this.todoUrl).then(res => res.json())
}

async getById(id:string):Promise<ITodo>{
  return await fetch(this.todoUrl+`/${id}`).then(res => res.json())
}

async addToDo(title:Partial<ITodo>):Promise<ITodo> {
  return await fetch(this.todoUrl,{
    method: 'POST',
    headers:{
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(title)
  }).then(res => res.json());
}

async updateTodo(todo: Partial<ITodo>): Promise<ITodo> {
  return await fetch(`${this.todoUrl}/${todo.id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(todo)
  }).then(res => res.json());
}


async deleteTodo(id:number): Promise<ITodo>{
return await fetch(`${this.todoUrl}/${id}`,{
  method: 'DELETE',
  headers:{
    'Content-Type': 'application/json',
  }
}).then(res => res.json())
}



getTodoCompletati(lista: ITodo[]){
  return lista.filter(p => p.completed)
}
getTodoNonCompletati(lista: ITodo[]){
  return lista.filter(p => !p.completed)
}

togglePost(lista:ITodo){
  this.todos = this.todos.map( p => {
    if (p.id == lista.id) {
      p.completed = !p.completed
    }
    return p
})
}


}
