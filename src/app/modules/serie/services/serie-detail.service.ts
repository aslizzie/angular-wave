import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SerieDetailService {
  private readonly URL = environment.api;

  constructor(private http: HttpClient) { 
    
  }
  
  getSerieById(id: number): Observable<any> {
    return this.http.get<any>(`${this.URL}/contents/series/${id}`);
  }
}
