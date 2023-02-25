import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainPagesComponent } from './main-pages/main-pages.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { Error404Component } from './main-pages/error404/error404.component';
import { AuthService } from './authServices';
import { RestService } from '../core/rest.services';
import { EstudiantesService } from './main-pages/_services/estudiantes.services';



@NgModule({
  declarations: [
    MainPagesComponent,
    Error404Component,
  
   
  
   
    
     
  ],
  imports: [
    CommonModule, SharedModule, AppRoutingModule
  ],
  providers: [
    AuthService, RestService,EstudiantesService
  ]
})
export class PagesModule { }
