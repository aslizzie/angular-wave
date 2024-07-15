import { Injectable } from '@angular/core';
import { MovieModel } from '@core/models/movies';
import { Observable, of } from 'rxjs';
import * as dataRaw from '../../../data/movies.json';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  dataMovies$:Observable<MovieModel[]> = of([])

  constructor() { 
    const { data }:any = (dataRaw as any).default;
    this.dataMovies$ = of(data)
  }
}
