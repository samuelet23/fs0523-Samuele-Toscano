import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { AuthComponent } from './pages/auth/auth.component';
import { FormsModule } from '@angular/forms';
import { AuthModule } from './pages/auth/auth.module';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { WelcomeModule } from './pages/welcome/welcome.module';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    AuthModule,
    WelcomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
