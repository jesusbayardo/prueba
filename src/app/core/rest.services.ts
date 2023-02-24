import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AuthService } from '../pages/authServices';


@Injectable()
export class RestService {

  constructor(private httpClient: HttpClient) {


  }

  credenciales = btoa('angularapp' + ':' + '12345');
  private httpHeaders = new HttpHeaders({ 'Content-Type': 'application/x-www-form-urlencoded', 'Authorization': 'Basic ' + this.credenciales });





  private agregarAuthorizationHeader() {

    this.httpHeaders = new HttpHeaders({'Content-Type':'application/json'});
    let token = sessionStorage.getItem('token');
    if (token != null) {
      return this.httpHeaders.append('Authorization', 'bearer ' + token);
    }
    return this.httpHeaders;
  }





  public get(url: string) {

    return this.httpClient.get(url, { headers: this.agregarAuthorizationHeader(), withCredentials:true });
  }

  public post(url: string, object: any) {

    return this.httpClient.post(url, JSON.stringify(object), { headers: this.agregarAuthorizationHeader(), withCredentials:true});
  }


  public delete(url: string) {

    return this.httpClient.delete(url, { headers: this.agregarAuthorizationHeader() , withCredentials:true});
  }



  public put(url: string, object: any) {

    return this.httpClient.put(url, JSON.stringify(object), { headers: this.agregarAuthorizationHeader(), withCredentials:true });
  }



  public postLogin(url: string, object: any) {

    
    let params = new URLSearchParams();
    params.set('grant_type', 'password');
    params.set('username', object.emailPer)
    params.set('password', object.passwordPer)
  
    return this.httpClient.post(url, params.toString(), { headers: this.httpHeaders });
  }

}