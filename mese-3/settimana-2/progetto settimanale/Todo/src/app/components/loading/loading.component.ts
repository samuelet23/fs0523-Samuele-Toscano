import { Component, Input } from '@angular/core';
import { ITodo } from '../../Models/itodo';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrl: './loading.component.scss'
})
export class LoadingComponent {
  @Input() todos: ITodo[] = [];
  @Input() dataLoaded: boolean = false;

}
