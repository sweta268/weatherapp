import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WeatherService } from './weather.service';
import { BrowserModule } from '@angular/platform-browser';
import { SearchBarComponent } from './search-bar/search-bar.component';

@NgModule({
  
  imports: [
    CommonModule,
    FormsModule,
    HttpClientModule,
    BrowserModule
  ],
  providers: [WeatherService,HttpClientModule], 
  bootstrap: [AppComponent] 
})
export class AppModule { }
