import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor( private router : Router) { }

  canActivate() {
    const token = window.localStorage.getItem('token');

    if(!token || token == ''){
      this.router.navigate(['home']);
      return false;
    }
    return true;
  }
}