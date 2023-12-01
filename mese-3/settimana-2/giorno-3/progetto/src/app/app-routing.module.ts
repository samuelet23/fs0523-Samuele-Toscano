import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ActiveComponent } from './active/active.component';
import { InactiveComponent } from './inactive/inactive.component';
import { DettaglioPostComponent } from './dettaglio-post/dettaglio-post.component';

const routes: Routes = [
  {
    path:'',
    pathMatch:'full',
    redirectTo : '/home'
  },
  {
    path: 'home',
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
  {
    path:'home/dettaglio-post/:id',
    component: DettaglioPostComponent,
    title: 'Dettaglio Post'
  },
  {
    path:'**',//è la pagina non found
    component: HomeComponent
  }





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
