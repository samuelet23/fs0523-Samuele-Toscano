import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TodoComponent } from './pages/todo/todo.component';
import { CompletedComponent } from './pages/completed/completed.component';
import { FormsModule } from '@angular/forms';
import { NavComponent } from './components/nav/nav.component';
import { ResetComponent } from './components/reset/reset.component';
import { PlusComponent } from './icons/plus/plus.component';
import { ModificaComponent } from './pages/modifica/modifica.component';
import { TitleComponent } from './components/title/title.component';
import { TodoCardComponent } from './components/todo-card/todo-card.component';
import { LoadingComponent } from './components/loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoComponent,
    CompletedComponent,
    NavComponent,
    ResetComponent,
    PlusComponent,
    ModificaComponent,
    TitleComponent,
    TodoCardComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
