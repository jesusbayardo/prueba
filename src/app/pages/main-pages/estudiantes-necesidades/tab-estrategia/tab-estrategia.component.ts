import { Component, OnInit, OnDestroy } from '@angular/core';
declare var jQuery: any;
declare var $: any;
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';

@Component({
  selector: 'app-tab-estrategia',
  templateUrl: './tab-estrategia.component.html',
  styleUrls: ['./tab-estrategia.component.scss']
})
export class TabEstrategiaComponent implements OnInit, OnDestroy {

  ngOnDestroy() {
    console.log('Items destroyed');
  }

  orderForm: any = FormGroup;
  items!: FormArray;


  estrategiaForm: any = FormGroup;
  estrategiaitems!: FormArray;

  constructor(private form: FormBuilder) { }

  ngOnInit(): void {

    this.orderForm = new FormGroup({
      items: new FormArray([])
    });


    this.estrategiaForm = new FormGroup({
      estrategiaitems: new FormArray([])
    });
  }


  /*****************************************************************************************************
   * ACTIVIDADES ESTRATEGIA
   */


  Actividades: boolean = false;

  /**********************
   * Agrega nuevas actividades
   */

  agregarActividad() {
    this.Actividades = true
    this.items = this.orderForm.get('items') as FormArray;
    this.items.push(this.createItem());
    this.arraylink=[]
  }



  public collapse: any[] = [];



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



  ocultaropciones1() {

  }

  /**********************************
   * Subida de los archivos
   */


  /*************************
   * Form carga de archivos
   */





  createItem(): FormGroup {
    return this.form.group({
      file: [''],
      link: [''],
      descripcion1: ['orem Ipsum is simply dummy text of the printing and ty'],
      descripcion2: ['armar muñeca'],
    });
  }





  createItemEstrategia(): FormGroup {
    return this.form.group({

      descripcion1: ['orem Ipsum is simply dummy text of the printing and ty'],

    });
  }





  /****************************
   * funcion para  obtener los archivos
   */
  archivos: any[] = [];
  fileUpload(event: any) {
    console.log(event.target.files)
    let archivos = event.target.files;
    for (let x = 0; x < archivos.length; x++) {
      const element = archivos[x];
      this.archivos.push(element.name)
    }



  }




  /**************************************
   * elimina un archivo upload
   */

  eliminarfile(i: any) {
    this.archivos.splice(i, 1);
  }


  /***************************
   * Funcion agregar links
   */

  arraylink: any[] = []



  agregaslink(i: any) {

    console.log(this.orderForm.get('items').controls[i].value.link)



    this.arraylink.push(this.orderForm.get('items').controls[i].value.link)





    this.orderForm.get('items').controls[i].value.link =this.arraylink

  }



  eliminarActivifaf(i: any) {
    console.log(i)
    this.orderForm.get('items').controls.splice(i, 1);
  }


  /**************************************
   * elimina link
   */

  eliminarlink(i: any,x:any) {
   
   

    this.orderForm.get('items').controls[i].value.link.splice(x, 1);

  }



  /**************************
   * Agregamos estrategias
   */


  sectionEstrategia: boolean = false;
  array: any[] = []
  agregarestrategia() {
    if (this.sectionEstrategia == true) {
      return
    }
    this.sectionEstrategia = true;

    this.estrategiaitems = this.estrategiaForm.get('estrategiaitems') as FormArray;
    this.estrategiaitems.push(this.createItemEstrategia());
    // this.f.controls['descripcion2'].setValue("lorem lorem lreo icpin lore")
  }



  /******************
   * elimina estrategia
   */

  eliminarestrategia(i: any) {

    console.log(this.orderForm.get('items').controls = [])



    this.sectionEstrategia = false;
    this.estrategiaForm.get('estrategiaitems').controls.splice(i, 1);



  }


  /***************obtenemos los link */

  links(i: any): any {

 
    var a = (this.orderForm.get('items').controls[i].value.link)
   

    return a;
  }
}
