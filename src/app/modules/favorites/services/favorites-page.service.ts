import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class FavoritesPageService {
  private readonly URL = environment.api;
  private userId = '';

  constructor(private Http: HttpClient) { }

  getFavorites$(userId: number):Observable<any> {
    return this.Http.get<any>(`${this.URL}/favorites/${userId}`).pipe(
      map(response => response.$values || [])
    );
  }

  isFavorite(userId: number, contentId: number): Observable<any> {
    return this.Http.get<boolean>(`${this.URL}/favorites/isFavorite/${userId}/${contentId}`);
  }

  addDeleteToFavorites(userId: number, contentId: number): Observable<any> {
    return this.Http.post(`${this.URL}/favorites`, {user_id: userId, content_id: contentId});
  }
}
