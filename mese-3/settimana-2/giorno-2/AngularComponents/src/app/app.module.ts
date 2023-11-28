import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './post/home-page/home-page.component';
import { ActivePostComponent } from './post/active-post/active-post.component';
import { UnActivePageComponent } from './post/un-active-post/un-active-page.component';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    ActivePostComponent,
    UnActivePageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
