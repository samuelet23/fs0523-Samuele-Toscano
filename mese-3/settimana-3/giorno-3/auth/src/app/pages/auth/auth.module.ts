import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthRoutingModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegistrazioneComponent } from './registrazione/registrazione.component';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegistrazioneComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule
  ]
})
export class AuthModule { }
