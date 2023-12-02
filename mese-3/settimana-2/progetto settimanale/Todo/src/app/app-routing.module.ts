import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TodoComponent } from './pages/todo/todo.component';
import { CompletedComponent } from './pages/completed/completed.component';
import { ModificaComponent } from './pages/modifica/modifica.component';

const routes: Routes = [
  {
    path: '',
    component: TodoComponent,
    title: 'Home Page'
  },
  {
    path: 'completed',
    component: CompletedComponent,
    title:'Task Completati'
  },
  {
    path:'modifica/:id',
    component:ModificaComponent,
    title:'Modifica Task'
  },
  {
    path:'**',
    component:TodoComponent,
    title: 'Home Page'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
