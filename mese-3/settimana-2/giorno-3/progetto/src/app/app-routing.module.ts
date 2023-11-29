import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActiveComponent } from './active/active.component';
import { InactiveComponent } from './inactive/inactive.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title:'Home Page'
  },
  {
    path: 'active',
    component: ActiveComponent,
    title:'Active Page'
  },
  {
    path: 'inactive',
    component: InactiveComponent,
    title:'Inactive Page'
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
