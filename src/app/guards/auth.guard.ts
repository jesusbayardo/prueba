import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../pages/authServices';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private route: Router,private AuthService:AuthService) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {



    return new Promise(resolve => {
      if (sessionStorage.getItem('token') != null) {

        
        resolve(true);
      } else {
        this.route.navigateByUrl("/login")
        resolve(true);

      }

    })

  }

}
