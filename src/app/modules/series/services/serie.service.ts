import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SerieService {
  private readonly URL = environment.api;

  constructor(private http: HttpClient) { 
    
  }
  
  getAllSeries$():Observable<any> {
    return this.http.get(`${this.URL}/series`).pipe(
      map((response: any) => response.$values || [])
    );
  }
}
