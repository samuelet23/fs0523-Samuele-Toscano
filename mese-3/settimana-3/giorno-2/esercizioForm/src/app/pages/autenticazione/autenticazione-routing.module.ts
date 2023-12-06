import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AutenticazioneComponent } from './autenticazione.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  { path: '',
   component: LoginComponent
  },
  {
    path:'/registrazione',
    component: RegistrazioneComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AutenticazioneRoutingModule { }
