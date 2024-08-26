import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class SessionGuard implements CanActivate {
  constructor(private authService: AuthService, 
    private router: Router) {

  }

  canActivate(): boolean {
    const user = localStorage.getItem('username');
    if (user) {
      return true;
    } else {
      this.router.navigate(['auth/login']);
      return false;
    }
  }
}
