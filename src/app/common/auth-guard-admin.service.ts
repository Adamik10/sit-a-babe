import { Injectable } from '@angular/core';
import { CanActivate, Router, RouterStateSnapshot } from '@angular/router';
import { authService } from './auth.service';

@Injectable({
    providedIn: 'root'
})

export class AuthGuardAdmin implements CanActivate {

    constructor(private authService: authService, private router: Router) { }

    canActivate(route, state: RouterStateSnapshot) {
        if (this.authService.isLoggedInAdmin()) return true;

        this.router.navigate(['/login'], { queryParams: { returnUrl: state.url } });
        return false
    }
}
