import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './components/todo/todo.component';
import { CompletedComponent } from './components/completed/completed.component';
import { ModificaComponent } from './components/modifica/modifica.component';

const routes: Routes = [
  {
    path: '',
    component: TodoComponent
  },
  {
    path: 'completed',
    component: CompletedComponent
  },
  {
    path:'modifica/:id',
    component:ModificaComponent
  },
  {
    path:'**',
    component:TodoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
