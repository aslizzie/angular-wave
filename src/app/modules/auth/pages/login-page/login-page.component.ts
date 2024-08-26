import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {}

  login() {
    this.authService.login(this.username, this.password).subscribe(
      response => {
     /*    localStorage.setItem('user', JSON.stringify(response)); */
        localStorage.setItem('username', response.data);
        localStorage.setItem('userId', response.userId);
        this.router.navigate(['/movies']);
      },
      error => {
        this.errorMessage = "Login failed. Please check your credentials and try again.";
      }
    );
  }
}

