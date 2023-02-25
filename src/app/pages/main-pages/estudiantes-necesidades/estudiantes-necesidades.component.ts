import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EstudiantesService } from '../_services/estudiantes.services';
import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ModalComponent } from './modal/modal.component';
declare var jQuery: any;
declare var $: any;
@Component({
  selector: 'app-estudiantes-necesidades',
  templateUrl: './estudiantes-necesidades.component.html',
  styleUrls: ['./estudiantes-necesidades.component.css']
})
export class EstudiantesNecesidadesComponent implements OnInit {

  destrezas: string = "Destrezas con criterios de desempeño";
  indicadores: string = "Indicadores de evaluación";
  estrategias: string = "Estrategias metodológicas activas para la enseñanza y aprendizaje"
  actividades: string = "Actividades evaluativas";

  constructor(private EstudiantesService: EstudiantesService, private form: FormBuilder,public dialog: MatDialog,) { }

  ngOnInit(): void {
    this.getEstudiantes();
  }

  dataEstudiante: any; selected: any
  discapacidades: any;






  /*****************************
   * Obtenemos los estudiantes del API
   */
  getEstudiantes() {
    this.EstudiantesService.getEstudiantes().subscribe((resp: any) => {
      this.dataEstudiante = resp.data;

    })
  }




/****************
 * aberel modal
 */
  

openmodal(){
  const dialogRef = this.dialog.open(ModalComponent, { 
  width: '60%'
   
  });
  dialogRef.afterClosed().subscribe(result => {
    //  console.log(result)
  
  })

}




}
