import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, Routes } from '@angular/router';
import { config } from '../config';
import { RestService } from 'src/app/core/rest.services';
import { alerts } from './helpers/alerts';


import { Usuario } from '../interface/usuario';
@Injectable()
export class AuthService {
  constructor(private http: HttpClient, private restService: RestService, private router: Router) {
  }






  public postGetLogin(user: any) {
    return this.restService.postLogin(`${config.api.url}${config.api.login.resource}`, user);

  }




  inicioSession(dataAdmin: any) {
    if (dataAdmin) {
      this.guardarUsuario(dataAdmin.access_token);
      this.guardarToken(dataAdmin.access_token);
      this.router.navigateByUrl("/");
    } else {
      alerts.basicAlert("error", "Usuario no encontrado", "error")
    }
  }


  private _usuario: any;
  private _token: any;



  public get usuario(): Usuario {
    if (this._usuario != null) {
      return this._usuario;
    } else if (this._usuario == null && sessionStorage.getItem('usuario') != null) {


      let payload = this.obtenerDatosToken(this.token);

     
      this._usuario = new Usuario();

      this._usuario.id = payload.id;
      this._usuario.nombre = payload.nombre;
      this._usuario.apellido = payload.apellido;
      this._usuario.email = payload.email;
      this._usuario.username = payload.user_name;
      this._usuario.roles = payload.authorities;
      return this._usuario;
    }
    return new Usuario();
  }



  public get token(): any {
    if (this._token != null) {
      return this._token;
    } else if (this._token == null && sessionStorage.getItem('token') != null) {
      this._token = sessionStorage.getItem('token');
      return this._token;
    }
    return null;
  }


  guardarUsuario(accessToken: string): void {
    let payload = this.obtenerDatosToken(accessToken);
    this._usuario = new Usuario();
    this._usuario.id = payload.id;
    this._usuario.nombre = payload.nombre;
    this._usuario.apellido = payload.apellido;
    this._usuario.email = payload.email;
    this._usuario.username = payload.user_name;
    this._usuario.roles = payload.authorities;
    sessionStorage.setItem('usuario', JSON.stringify(this._usuario));
  }


  guardarToken(accessToken: string): void {
    this._token = accessToken;
    sessionStorage.setItem('token', accessToken);
  }


  hasRole(role: string): boolean {


 
    if (this.usuario.roles[0].includes(role)) {
      return true;
    }
    return false;
  }




  obtenerDatosToken(accessToken: string): any {
    if (accessToken != null) {
      return JSON.parse(atob(accessToken.split(".")[1]));
    }
    return null;
  }




  isAuthenticated(): boolean {
    let payload = this.obtenerDatosToken(this.token);
    if (payload != null && payload.user_name && payload.user_name.length > 0) {
      return true;
    }
    return false;
  }





}
