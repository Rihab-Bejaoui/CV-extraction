import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {


  constructor(private  router: Router) {

  }

  canActivate() {

    if (sessionStorage.getItem('etat') === '1') {

      return true;


    } else {

      this.router.navigate(['login']);

      return false;


    }
  }
}
