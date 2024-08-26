import { Component, OnInit } from '@angular/core';
import { AuthService } from '@modules/auth/services/auth.service';
import { FavoritesPageService } from '@modules/favorites/services/favorites-page.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-favorites-page',
  templateUrl: './favorites-page.component.html',
  styleUrls: ['./favorites-page.component.css']
})
export class FavoritesPageComponent implements OnInit {
  mockFavoritesList:Array<any> = []

  listObservers$:Array<Subscription> = []

  constructor(private favoritesService: FavoritesPageService, private authService: AuthService) { }

  ngOnInit(): void {
    const userId = this.authService.getUserId();

    if (userId !== null) {
      this.favoritesService.getFavorites$(userId)
      .subscribe(response => {
        console.log(response)
        this.mockFavoritesList = response;
      })
    } else {
      console.error('User ID is null');
    }
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe());
  }

}
