import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudiantesNecesidadesComponent } from './estudiantes-necesidades.component';
import { AppEstudiantesNecesidadesRoutingModule } from './estudiantes-necesidades-routing.module';



@NgModule({
  declarations: [
    EstudiantesNecesidadesComponent
  ],
  imports: [
    CommonModule,AppEstudiantesNecesidadesRoutingModule
  ]
})
export class EstudiantesNecesidadesModule { }
