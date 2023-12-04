import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PreferitiComponent } from './pages/preferiti/preferiti.component';
import { CarrelloComponent } from './pages/carrello/carrello.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent,
    title:'Home Page'
  },
  {
    path:'preferiti',
    component:PreferitiComponent,
    title:'Preferiti'
  },
  {
    path:'carrello',
    component:CarrelloComponent,
    title:'Il tuo carrello'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
