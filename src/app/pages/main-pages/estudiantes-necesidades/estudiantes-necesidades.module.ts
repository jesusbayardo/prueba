import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstudiantesNecesidadesComponent } from './estudiantes-necesidades.component';
import { AppEstudiantesNecesidadesRoutingModule } from './estudiantes-necesidades-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { TabEstrategiaComponent } from './tab-estrategia/tab-estrategia.component';
import { TabEstudiantesNEEComponent } from './tab-estudiantes-nee/tab-estudiantes-nee.component';
import { TabDestrezasComponent } from './tab-destrezas/tab-destrezas.component';
import { ModalComponent } from './modal/modal.component';
import {MatDialogModule} from '@angular/material/dialog';


import { MatSelectModule } from '@angular/material/select';

import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { MatSelectFilterModule } from 'mat-select-filter';
import {MatSlideToggleModule} from '@angular/material/slide-toggle';
@NgModule({
  declarations: [
    EstudiantesNecesidadesComponent,
    TabEstrategiaComponent,
    TabEstudiantesNEEComponent,
    TabDestrezasComponent,
    ModalComponent
  ],
  imports: [MatSlideToggleModule,MatSelectModule,MatSelectFilterModule,
    CommonModule,AppEstudiantesNecesidadesRoutingModule,ReactiveFormsModule,FormsModule,MatDialogModule,MatAutocompleteModule
  ]
})
export class EstudiantesNecesidadesModule { }
