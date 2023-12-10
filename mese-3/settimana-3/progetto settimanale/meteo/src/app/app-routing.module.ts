import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthComponent } from './pages/auth/auth.component';
import { LoginComponent } from './pages/auth/login/login.component';
import { AuthGuard } from './auth.guard';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path:'',
    loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule)
  },
  { path: 'auth', loadChildren: () => import('./pages/auth/auth.module').then(m => m.AuthModule) },
  {
     path: 'welcome',
     loadChildren: () => import('./pages/welcome/welcome.module').then(m => m.WelcomeModule),
    canActivate:[AuthGuard]
    },
  {
     path: 'city/:id',
   loadChildren: () => import('./pages/city/city.module').then(m => m.CityModule),
  canActivate:[AuthGuard]
 },
  {
     path: 'preferiti',
      loadChildren: () => import('./pages/preferiti/preferiti.module').then(m => m.PreferitiModule),
      canActivate:[AuthGuard]
     },
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then(m => m.HomeModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
