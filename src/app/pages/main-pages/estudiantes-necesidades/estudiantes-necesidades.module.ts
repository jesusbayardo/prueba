import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudiantesNecesidadesComponent } from './estudiantes-necesidades.component';
import { AppEstudiantesNecesidadesRoutingModule } from './estudiantes-necesidades-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    EstudiantesNecesidadesComponent
  ],
  imports: [
    CommonModule,AppEstudiantesNecesidadesRoutingModule,ReactiveFormsModule,FormsModule
  ]
})
export class EstudiantesNecesidadesModule { }
