import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { authService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard{
  
}
/*
export class AuthGuard implements CanActivate {

  constructor(private authService: authService, private router: Router) { }

  canActivate(){
    if(this.authService.isLoggedIn()) return true;

    this.router.navigate(['/login']);
    return false
  }
}
*/