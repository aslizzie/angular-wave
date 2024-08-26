import { Component, Input, OnInit } from '@angular/core';
import { FavoritesPageService } from '@modules/favorites/services/favorites-page.service';

@Component({
  selector: 'app-card-hero',
  templateUrl: './card-hero.component.html',
  styleUrls: ['./card-hero.component.css']
})
export class CardHeroComponent implements OnInit {
  @Input() item: any = {
  };
  @Input() userId!: number;
  @Input() itemId!: number;

  isFavorite: boolean = false;

  constructor(private favoriteService: FavoritesPageService) { }

  ngOnInit(): void {
    this.checkIfFavorite();
  }

  checkIfFavorite(): void {
    this.favoriteService.isFavorite(this.userId, this.itemId)
      .subscribe(response => {
        console.log(response);
        this.isFavorite = response;
      }, error => {
        console.error('Error checking if favorite', error);
      });
  }

  addDeleteToFavorites() {
    this.favoriteService.addDeleteToFavorites(this.userId, this.itemId)
      .subscribe(response => {
        window.location.reload();
      }, error => {
        console.error('Error adding to favorites', error);
      });
  }
}
