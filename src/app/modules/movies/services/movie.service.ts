import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable} from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
/* import * as dataRaw from '../../../data/movies.json'; */

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private readonly URL = environment.api;

  constructor(private http: HttpClient) { 
    
  }
  
  getAllMovies$():Observable<any> {
    return this.http.get(`${this.URL}/movies`).pipe(
      map((response: any) => response.$values || [])
    );
  }
}
