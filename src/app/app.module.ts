import {HttpClientModule} from '@angular/common/http';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent }  from './app.component';



@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule,
    CommonModule,HttpClientModule
  ],
  bootstrap:[ AppComponent ],
  providers: [ HttpClientModule ]
})
export class AppModule { }
