import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { EstudiantesService } from '../../_services/estudiantes.services';
@Component({
  selector: 'app-tab-estudiantes-nee',
  templateUrl: './tab-estudiantes-nee.component.html',
  styleUrls: ['./tab-estudiantes-nee.component.css']
})
export class TabEstudiantesNEEComponent implements OnInit {

  constructor(private form: FormBuilder,private EstudiantesService: EstudiantesService) { }

  ngOnInit(): void {
    this.getEstudiantes();
  }
  /*****************
   * primer tab, inicia seleccion 
   */
  estudianteNee: boolean = false;



/*****************************
   * Obtenemos los estudiantes del API
   */
dataEstudiante: any;
selected: any;
getEstudiantes() {
  this.EstudiantesService.getEstudiantes().subscribe((resp: any) => {
    this.dataEstudiante = resp.data;

  })
}


  form1 = new FormGroup({
    category: new FormControl(null)
  });
  get category() { return this.form1.controls['category'] }


  /**************************
   * se ejecuta cuandi hacemos el click en unas de las opciones de select de la lista de destrazas
   */

  SelectPrimerTab() {
    this.estudianteNee = true;
    console.log(this.form1.controls['category'].value)
    this.selected = this.form1.controls['category'].value
  }



}
