import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CommonComponent } from './components/common/common.component';
import { CurrentComponent } from './components/current/current.component';


@NgModule({
  declarations: [
    AppComponent,
    CommonComponent,
    CurrentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
