import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UserdashComponent } from './shared/component/userdash/userdash.component';
import { UserformComponent } from './shared/component/userform/userform.component';
import { Display1Component } from './shared/component/display1/display1.component';
import { Display2Component } from './shared/component/display2/display2.component';
import { Display3Component } from './shared/component/display3/display3.component';
import { MaterialModule } from './shared/material/material.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    UserdashComponent,
    UserformComponent,
    Display1Component,
    Display2Component,
    Display3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
