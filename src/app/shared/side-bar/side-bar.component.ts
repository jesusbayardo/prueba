import { Component, OnInit } from '@angular/core';
import { Router, Routes } from '@angular/router';
import { LoginComponent } from 'src/app/pages/login/login.component';
import { AuthService } from 'src/app/pages/authServices';
@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  constructor(private route: Router, private authservice: AuthService) { }
  role: any;
  ngOnInit(): void {

  }





  hasRole(role: string): boolean {


    return this.authservice.hasRole(role)

  }




  logot() {

    sessionStorage.clear();
    sessionStorage.removeItem('token');
    localStorage.removeItem('token');
    sessionStorage.removeItem('usuario');
    this.route.navigateByUrl("/login")
    window.location.reload();
  }


}
