import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieDetailService } from '@modules/movie/services/movie-detail.service';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})
export class MovieDetailComponent implements OnInit {
  movie: any;
  errorMessage: string = '';

  constructor(
    private route: ActivatedRoute,
    private movieDetailService: MovieDetailService
  ) {}

  ngOnInit() {
    const movieIdParam = this.route.snapshot.paramMap.get('id');
    if (movieIdParam) {
      const movieId = +movieIdParam;

      this.movieDetailService.getMovieById(movieId).subscribe(
        data => {
          this.movie = data;
          this.errorMessage = '';
        },
        error => {
          this.errorMessage = error.error.message || 'Ocurrió un error inesperado';
        }
      );
    } else {
      this.errorMessage = 'ID de película no válido';
    }
  }
}
