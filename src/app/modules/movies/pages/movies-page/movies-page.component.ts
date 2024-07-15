import { Component, OnInit } from '@angular/core';
import { MovieModel } from '@core/models/movies';
import { MovieService } from '@modules/movies/services/movie.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-movies-page',
  templateUrl: './movies-page.component.html',
  styleUrls: ['./movies-page.component.css']
})
export class MoviesPageComponent implements OnInit {
  mockMoviesList:Array<MovieModel> = []

  listObservers$:Array<Subscription> = []
  
  constructor(private moviesService: MovieService) { }

  ngOnInit(): void {
    const observer1$ = this.moviesService.dataMovies$
    .subscribe(response => {
      this.mockMoviesList = response
    });

    this.listObservers$ = [observer1$];
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe());
  }
}
