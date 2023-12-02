import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ITodo } from '../../Models/itodo';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrl: './todo-card.component.scss'
})
export class TodoCardComponent {
  @Input() todo: ITodo | undefined = undefined;
  @Output() toggleComplete = new EventEmitter<ITodo>();
  @Output() elimina = new EventEmitter<number>();
}
