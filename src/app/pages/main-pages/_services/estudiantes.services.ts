import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router, Routes } from '@angular/router';
import { config } from 'src/app/config'; 
import { RestService} from 'src/app/core/rest.services';




@Injectable()
export class EstudiantesService {
  constructor(private http: HttpClient, private restService: RestService, private router: Router) {
  }


  public getEstudiantes() {
    
    return this.restService.get(`${config.api.urlestudiantes}`, );

  }





}
