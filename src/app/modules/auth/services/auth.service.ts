import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private userId: number | null = null;
  private readonly URL = environment.api

  constructor(private http:HttpClient, private router:Router) { 
    this.userId = parseInt(localStorage.getItem('userId') || '0', 10);
  }

  login(username: string, password: string): Observable<any> {
    const url = `${this.URL}/auth/login`;
    const body = { username, password };
    return this.http.post(url, body);
  }

  logout(): void {
    localStorage.removeItem('user');

    this.router.navigate(['/auth/login']);
  }

  getUserId(): number | null {
    return this.userId;
  }
}
