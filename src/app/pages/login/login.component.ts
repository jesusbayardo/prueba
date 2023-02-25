import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validator, Validators } from '@angular/forms';
import { functions } from '../helpers/functions';
import { Ilogin } from 'src/app/interface/ilogin';
import { AuthService } from '../authServices';
import { alerts } from '../helpers/alerts';

import { HttpHeaders } from '@angular/common/http';



import { Router, Routes } from '@angular/router';
import { Usuario } from '../../interface/usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  

  private dataAdmin: any;
  public f = this.form.group({
    email: ['bayardojesus@gmail.com', [Validators.required, Validators.email]],
    password: ['123456', Validators.required]
  })

  constructor(private form: FormBuilder, private loginService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  formSubmitted = false;

  login(): void {
    this.formSubmitted = true;
    if (this.f.invalid) {

      return;
    }

   

 

    window.location.href = "/menu/estudiantes-necesidades";


  }

 







  invalidField(field: string) {
    return functions.invalidFields(field, this.f, this.formSubmitted);
  }





  







}
