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
  todo: Partial<ITodo> = { completed: false };
  todoCreate: ITodo | null = null;
  dataLoaded = true;

  constructor(private todosvc: TodosService) {}

  ngOnInit() {
    this.todosvc.getAll().then((todos) => {
      this.dataLoaded = false;
      this.todos = todos.filter((todo) => todo.completed);
    });
  }

  mostra() {
    if (!this.todo || !this.todo.title || this.todo.title.trim() === '') {
      alert('Inserisci il tuo task');
      return;
    }
    this.todosvc.addToDo(this.todo).then((res) => {
      this.todoCreate = res;
      this.todo = { completed: false };
      this.todos.unshift(res);
    });
  }

  elimina(id: number) {
    this.todosvc.deleteTodo(id).then(() => {
      this.todos = this.todos.filter((todo) => todo.id !== id);
      alert('il tuo task è stato eliminato correttamente');
    });
  }

  toggleComplete(todo: ITodo) {
    todo.completed = !todo.completed;
    this.todosvc.updateTodo(todo).then(() => {
      this.todos = this.todos.filter((t) => !t.completed);
    });
  }

}



