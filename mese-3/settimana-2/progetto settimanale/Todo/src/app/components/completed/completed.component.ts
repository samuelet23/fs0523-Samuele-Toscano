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

  delete(id: number | undefined): void {
    if (!id) {
      return;
    }

    this.todosvc.deleteTodo(id).then(() => {
      this.todos = this.todos.filter(todo => todo.id !== id);
      alert(`Task con id ${id} eliminata`);
    });
  }

}


// this.todos = todos.filter(t => t.completed);
