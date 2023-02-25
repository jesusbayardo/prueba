import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { EstudiantesService } from '../_services/estudiantes.services';
import { FormBuilder } from '@angular/forms';

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

  constructor(private EstudiantesService: EstudiantesService, private form: FormBuilder) { }

  ngOnInit(): void {
    this.getEstudiantes();
  }

  dataEstudiante: any; selected: any
  discapacidades: any;
  estudianteNee: boolean = false;
  textoselect: any = "";
  collapses1: any[] = []



  /*****************************
   * Obtenemos los estudiantes del API
   */
  getEstudiantes() {
    this.EstudiantesService.getEstudiantes().subscribe((resp: any) => {
      this.dataEstudiante = resp.data;

    })
  }



  /*****************
   * primer tab, inicia seleccion 
   */


  form1 = new FormGroup({
    category: new FormControl(null)
  });
  get category() { return this.form1.controls['category'] }



  form2 = new FormGroup({
    destreza: new FormControl(null)
  });
  get destreza() { return this.form2.controls['destreza'] }


  /**************************
   * se ejecuta cuandi hacemos el click en unas de las opciones de select de la lista de destrazas
   */

  SelectPrimerTab() {
    this.estudianteNee = true;
    console.log(this.form1.controls['category'].value)
    this.selected = this.form1.controls['category'].value
  }




  /*****************************************SEGUNDO TAB************************************************* */



  /*************************************
   * Destrezas json para el select
   */



  texto: string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry";
  jsondestrezas: any[] = [
    {
      position: 1,
      detreza: "Lorem Ipsum is simply dummy text of the printing and typesetting industry"
    },
    {
      position: 2,
      detreza: "de Lorem Ipsum, y más recientemente con software de autoedición, como por "
    }, {
      position: 3,
      detreza: "ay muchas variaciones de los pasajes de Lorem Ipsum disponibles, "
    }



  ];





  public collapses: any[] = [];


  /********************************
   * Agrega las nuevas entradas de las destrezas
   */
  agregarCollapse() {

    this.collapses.length + 1

    this.collapses.push(this.collapses.length + 1);
    this.texto = "";
  }


  /**********************************************
   * Elimina las nuevas entradas de destrezas
   */

  borrarTrabajo1(indice: number) {
    this.collapses1.splice(indice, 1);

  }


  borrarTrabajo(indice: number) {
    this.collapses.splice(indice, 1);

  }

 


  isValid: boolean = true;
  age: number = 12;
  changeValue(valid: boolean) {
    this.isValid = valid;
  }

  /******************
   * Validacion almacenar
   */


  validate(input: any) {
    var auxu = "s" + $(input).attr("name")
    var auxa = "e" + $(input).attr("name")
    if ($(input).attr("display") == "block") {
      var z: any = document.getElementById(auxu);
      z.style.display = 'none';
      var a: any = document.getElementById(auxa);
      a.style.display = 'block';
    }
  }


  /**********************
   * Validacion editar
   */

  validateedit(input: any) {
    var auxa = "e" + $(input).attr("name")
    var a: any = document.getElementById(auxa);
    a.style.display = 'none';
    var auxa = "f" + $(input).attr("name")
    var g: any = document.getElementById(auxa);
    g.style.display = 'block';
  }





  /**********************
    * Validacion editar
    */

  validateeditSave(input: any) {
    var auxa = "f" + $(input).attr("name")
    var a: any = document.getElementById(auxa);
    a.style.display = 'none';
    var auxe = "e" + $(input).attr("name")
    var e: any = document.getElementById(auxe);
    e.style.display = 'block';
  }

  /********************************
   * ejecuta la accion del click delselect de lista de destrezaas
   */
  selectChange() {
    
    this.collapses1.length + 1;
    this.collapses1.push(this.collapses1.length + 1);
    this.textoselect = "ay muchas variaciones de los pasajes de Lorem Ipsum disponibles,";
    this.form2.controls['destreza'].setValue(null)
  }












   /******************
   * Validacion almacenar
   */


   validateSelect(input: any) {
    var auxu = "ss" + $(input).attr("name")
    var auxa = "ee" + $(input).attr("name")
    if ($(input).attr("display") == "block") {
      var z: any = document.getElementById(auxu);
      z.style.display = 'none';
      var a: any = document.getElementById(auxa);
      a.style.display = 'block';
    }
  }


  /**********************
   * Validacion editar
   */

  validateeditSelect(input: any) {
    var auxa = "ee" + $(input).attr("name")
    var a: any = document.getElementById(auxa);
    a.style.display = 'none';
    var auxa = "ff" + $(input).attr("name")
    var g: any = document.getElementById(auxa);
    g.style.display = 'block';
  }





  /**********************
    * Validacion editar
    */

  validateeditSaveSelect(input: any) {
    var auxa = "ff" + $(input).attr("name")
    var a: any = document.getElementById(auxa);
    a.style.display = 'none';
    var auxe = "ee" + $(input).attr("name")
    var e: any = document.getElementById(auxe);
    e.style.display = 'block';
  }
}
