import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(
    private route: ActivatedRoute,
    private movieDetailService: SerieDetailService
  ) {}

  ngOnInit() {
    const serieIdParam = this.route.snapshot.paramMap.get('id');
    if (serieIdParam) {
      const serieId = +serieIdParam;

      this.movieDetailService.getSerieById(serieId).subscribe(
        data => {
          this.serie = data;
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
