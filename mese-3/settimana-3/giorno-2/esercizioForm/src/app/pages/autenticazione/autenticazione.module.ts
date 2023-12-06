import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';  // Importa solo ReactiveFormsModule

import { AutenticazioneRoutingModule } from './autenticazione-routing.module';
import { AutenticazioneComponent } from './autenticazione.component';
import { LoginComponent } from './login/login.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';

@NgModule({
  declarations: [
    AutenticazioneComponent,
    LoginComponent,
    RegistrazioneComponent,
  ],
  imports: [
    CommonModule,
    AutenticazioneRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class AutenticazioneModule { }
