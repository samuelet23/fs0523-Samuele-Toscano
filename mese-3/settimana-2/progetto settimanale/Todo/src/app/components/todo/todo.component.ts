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
    this.loading = true;
    this.todosvc.addToDo(this.todo).then(res => {
      this.loading = false;
      this.todoCreate = res;
      this.todo = {
        completed: false
      };
      this.todos.push(res);
    });
  }


  getNotCompleteTodo(){

  }


  toggleComplete(lista:ITodo){
    lista.completed = !lista.completed;
    this.todosvc.updateTodo(lista).then(res=>{
      this.todos=this.todos.filter(t=>!t.completed)
    })
  }

  }


