import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AuthService } from '@modules/auth/services/auth.service';
import { MovieDetailService } from '@modules/movie/services/movie-detail.service';
import { SerieDetailService } from '@modules/serie/services/serie-detail.service';

@Component({
  selector: 'app-serie-detail',
  templateUrl: './serie-detail.component.html',
  styleUrls: ['./serie-detail.component.css']
})
export class SerieDetailComponent implements OnInit {
  serie: any;
  errorMessage: string = '';
  userId: any;
  itemId: any;

  constructor(
    private route: ActivatedRoute,
    private movieDetailService: SerieDetailService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    const serieIdParam = this.route.snapshot.paramMap.get('id');
    if (serieIdParam) {
      const serieId = +serieIdParam;

      this.movieDetailService.getSerieById(serieId).subscribe(
        data => {
        /*   console.log( this.itemId = data.contentId); */
          this.serie = data;
          this.errorMessage = '';
          this.userId = this.authService.getUserId();
          this.itemId = data.contentId;
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
