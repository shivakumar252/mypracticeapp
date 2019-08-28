import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing } from "./app.routing";
import { AppComponent } from './app.component';

import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { MenuComponent } from './menu/menu.component';
import { ReactiveFormsModule } from "@angular/forms";

import { Interceptor } from './interceptor';
import { TaskdisplayComponent } from './taskdisplay/taskdisplay.component';
import { EdittaskComponent } from './taskdisplay/edittask/edittask.component';
import { AddtaskComponent } from './taskdisplay/addtask/addtask.component';
import { LoginComponent } from './login/login.component';
import { PreloadAllModules } from '@angular/router';



@NgModule({
  declarations: [
    AppComponent,

    MenuComponent,

    TaskdisplayComponent,
    EdittaskComponent,
    AddtaskComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    routing,
     ReactiveFormsModule


  ],
  providers: [
    {provide:HTTP_INTERCEPTORS,useClass:Interceptor,multi:true},
    PreloadAllModules

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
