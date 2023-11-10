import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
import { SearchBarComponent } from './search-bar/search-bar.component';


export const routes: Routes = [

    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: SearchBarComponent }
   
];
