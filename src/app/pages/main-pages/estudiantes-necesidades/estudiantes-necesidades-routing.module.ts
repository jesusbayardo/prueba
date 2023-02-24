import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudiantesNecesidadesComponent } from './estudiantes-necesidades.component';


const routes:
  Routes = [
    {
      path: '', component:EstudiantesNecesidadesComponent
      
    }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppEstudiantesNecesidadesRoutingModule{ }
