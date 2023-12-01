import { Component, OnInit } from '@angular/core';
import { TodosService } from '../../todos.service';
import { ITodo } from '../../Models/itodo';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit { // Implementa l'interfaccia OnInit
  todos: ITodo[] = [];
  todo: Partial<ITodo> = {
    completed: false
  };
  loading: boolean = false;

  constructor(private todosvc: TodosService) {}

  ngOnInit() {
    this.todosvc.getAll().then(todos => this.todos = todos.filter(todo => todo.completed));
  }

  elimina(id: number){
    this.todosvc.deleteTodo(id).then(() => {
      this.todos = this.todos.filter(todo => todo.id !== id);
      alert('il tuo task è stato eliminato correttamente')
    });
  }
  toggleComplete(lista:ITodo){
    lista.completed = !lista.completed;
    this.todosvc.updateTodo(lista).then(res=>{
      this.todos=this.todos.filter(t=>t.completed)
    })
  }

}



