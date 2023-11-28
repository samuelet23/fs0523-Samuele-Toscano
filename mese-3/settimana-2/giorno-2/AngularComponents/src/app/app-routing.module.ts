import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './post/home-page/home-page.component';
import { ActivePostComponent } from './post/active-post/active-post.component';
import { UnActivePageComponent } from './post/un-active-post/un-active-page.component';

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent,
    title:'Home Page'
  },
  {
    path: 'active-post',
    component:ActivePostComponent,
    title: 'Active Post'
  },
  {
    path: 'un-active-post',
    component: UnActivePageComponent,
    title: 'Un-Active Post'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
