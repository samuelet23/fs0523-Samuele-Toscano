import { Component } from '@angular/core';
import { TodosService } from '../../todos.service';
import { ActivatedRoute } from '@angular/router';
import { ITodo } from '../../Models/itodo';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modifica',
  templateUrl: './modifica.component.html',
  styleUrl: './modifica.component.scss'
})
export class ModificaComponent {
  constructor(
    private route: ActivatedRoute,//per ottenere dati sulla rotta attiva
    private todoSvc:TodosService,
    private router: Router
    ){}
    dataLoaded = true;
    todo:Partial<ITodo> = {
      completed: false
    }


  ngOnInit(){
    //usa questo per leggere il parametro id nell'url
    this.route.params.subscribe((params:any) => {

      this.todoSvc.getById(params.id).then(res => this.todo = res)
      this.dataLoaded = false;
    })
    }
    modifica(){
      this.todoSvc.updateTodo(this.todo).then( res => {
        this.router.navigate(['/']);
      })
}
}


