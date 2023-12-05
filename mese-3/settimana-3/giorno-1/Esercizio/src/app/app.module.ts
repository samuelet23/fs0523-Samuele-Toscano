import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HomeComponent } from './pages/home/home.component';
import { PreferitiComponent } from './pages/preferiti/preferiti.component';
import { CarrelloComponent } from './pages/carrello/carrello.component';
import { CartComponent } from './icons/cart/cart.component';
import { NavComponent } from './components/nav/nav.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PreferitiComponent,
    CarrelloComponent,
    CartComponent,
    NavComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
