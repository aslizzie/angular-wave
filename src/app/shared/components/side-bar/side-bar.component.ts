import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {
  mainMenu: Array<any> = []

  constructor() { }

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
        router: ['/', 'categories'],
        options: ['Acción', 'Ciencia ficcion', 'Comedia', 'Drama', 'Musical']
      },
      {
        name: 'Favorites',
        icon: 'bi bi-suit-heart-fill',
        router: ['/', 'favorites'],
        options: ''
      }
    ]
  }

}
