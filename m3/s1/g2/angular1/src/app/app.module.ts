import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { Sezione1Component } from './component/sezione1/sezione1.component';
import { Sezione2Component } from './component/sezione2/sezione2.component';
import { Sezione3Component } from './component/sezione3/sezione3.component';

@NgModule({
  declarations: [
    AppComponent,
    Sezione1Component,
    Sezione2Component,
    Sezione3Component
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
