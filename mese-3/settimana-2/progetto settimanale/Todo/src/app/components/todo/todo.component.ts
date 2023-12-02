import { Component } from '@angular/core';
import { TodosService } from '../../todos.service';
import { ITodo } from '../../Models/itodo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})
export class TodoComponent {
  todos:ITodo[] =[]
  constructor(private todosvc:TodosService){}

  todo:Partial<ITodo> = {
    completed: false
  }
  todoCreate: ITodo| null = null
  loading:boolean = false;

  ngOnInit() {
    this.todosvc.getAll().then(todos => this.todos = todos.filter(todo => !todo.completed));
  }

  mostra() {
    if (!this.todo || !this.todo.title || this.todo.title.trim() === '') {
      alert('Inserisci il tuo task');
      return;
    }
    this.loading = true;
    this.todosvc.addToDo(this.todo).then(res => {
      this.todoCreate = res;
      this.todo = {
        completed: false
      };
      this.todos.unshift(res);
    });
  }



  toggleComplete(lista:ITodo){
    lista.completed = !lista.completed;
    this.todosvc.updateTodo(lista).then(res=>{
      this.todos=this.todos.filter(t=>!t.completed)
    })
  }

  }


