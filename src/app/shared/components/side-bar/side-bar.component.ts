import { Component, OnInit } from '@angular/core';
import { AuthService } from '@modules/auth/services/auth.service';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  mainMenu: Array<any> = []
  username: string | null = '';

  constructor(private authService:AuthService) { }

  ngOnInit(): void {
    this.mainMenu = [
      {
        name: 'Home',
        icon: 'bi bi-house-door-fill',
        router: ['/'],
        options: ''
      },
      {
        name: 'Categories',
        icon: 'bi bi-grid-fill',
        router: [''],
        options: ['Acción', 'Ciencia ficcion', 'Comedia', 'Drama', 'Musical']
      },
      {
        name: 'Favorites',
        icon: 'bi bi-suit-heart-fill',
        router: ['/', 'favorites'],
        options: ''
      }
    ]

    this.username = localStorage.getItem('username');
  }

  onLogout(): void {
    this.authService.logout();
  }

}
