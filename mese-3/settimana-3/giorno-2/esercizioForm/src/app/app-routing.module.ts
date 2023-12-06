import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/autenticazione/login/login.component';
import { RegistrazioneComponent } from './pages/autenticazione/registrazione/registrazione.component';

const routes: Routes = [
  {
    path:'',
    redirectTo: '/autenticazione',
    pathMatch: 'full'

  },

  { path: 'autenticazione', loadChildren: () => import('./pages/autenticazione/autenticazione.module').then(m => m.AutenticazioneModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
