import { Injectable } from '@angular/core';
import { Router,ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

import { AuthService } from '../pages/authServices';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {
constructor (private authService:AuthService,private route:Router){}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> |  Promise<boolean> | boolean {
      let role=next.data['role'] as string;

      if(this.authService.hasRole(role)){

        return true;
      }
      this.route.navigate(['/'])
      return true;
    
  }
  
}
