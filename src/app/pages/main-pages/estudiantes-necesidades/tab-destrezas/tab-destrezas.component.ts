import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
declare var jQuery: any;
declare var $: any;
@Component({
  selector: 'app-tab-destrezas',
  templateUrl: './tab-destrezas.component.html',
  styleUrls: ['./tab-destrezas.component.css']
})
export class TabDestrezasComponent implements OnInit {

  constructor(private form: FormBuilder) { }
  jsondestrezas:any[]=[]
  ngOnInit(): void {
    this.jsondestrezas = [
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

    this.filter = this.jsondestrezas
    this.filteredList = this.jsondestrezas.slice();
  }
  filter: any = [];
  filteredList: any;

  form2 = new FormGroup({
    destreza: new FormControl(null)
  });
  get destreza() { return this.form2.controls['destreza'] }



  /********************************
   * ejecuta la accion del click delselect de lista de destrezaas
   */

  collapses1: any[] = []
  textoselect: any = "";
  selectChange() {
    console.log("Asdas")
    
    this.collapses1.length + 1;
    this.collapses1.push(this.collapses1.length + 1);
    this.textoselect = "ay muchas variaciones de los pasajes de Lorem Ipsum disponibles,";
    this.form2.controls['destreza'].setValue(null)
  }



  
  /*************************************
   * Destrezas json para el select
   */



  texto: string = "Lorem Ipsum is simply dummy text of the printing and typesetting industry";
 



  






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
