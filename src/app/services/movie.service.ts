import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from '../../environments/environment';
import { Movie, MovieListResponse } from '../models/movie.model';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private baseUrl = environment.tmdbBaseUrl;
  private apiKey = environment.tmdbApiKey;
  private imageUrl = environment.tmdbImageUrl;
  private favoritesKey = 'cineapp_favorites';

  constructor(private http: HttpClient) {}

  getPopularMovies(): Observable<MovieListResponse> {
    return this.http.get<MovieListResponse>(`${this.baseUrl}/movie/popular`, {
      params: this.getDefaultParams()
    });
  }

  getTopRatedMovies(): Observable<MovieListResponse> {
    return this.http.get<MovieListResponse>(`${this.baseUrl}/movie/top_rated`, {
      params: this.getDefaultParams()
    });
  }

  searchMovies(query: string): Observable<MovieListResponse> {
    return this.http.get<MovieListResponse>(`${this.baseUrl}/search/movie`, {
      params: this.getDefaultParams().set('query', query)
    });
  }

  getMovieDetails(id: number): Observable<Movie> {
    return this.http.get<Movie>(`${this.baseUrl}/movie/${id}`, {
      params: this.getDefaultParams()
    });
  }

  getImageUrl(path: string) {
    return `${this.imageUrl}${path}`;
  }

  getFavorites(): Movie[] {
    const favorites = localStorage.getItem(this.favoritesKey);
    return favorites ? JSON.parse(favorites) : [];
  }

  isFavorite(movieId: number) {
    return this.getFavorites().some((movie) => movie.id === movieId);
  }

  addFavorite(movie: Movie) {
    const favorites = this.getFavorites();

    if (!this.isFavorite(movie.id)) {
      favorites.push(movie);
      localStorage.setItem(this.favoritesKey, JSON.stringify(favorites));
    }
  }

  removeFavorite(movieId: number) {
    const favorites = this.getFavorites().filter((movie) => movie.id !== movieId);
    localStorage.setItem(this.favoritesKey, JSON.stringify(favorites));
  }

  private getDefaultParams() {
    return new HttpParams()
      .set('api_key', this.apiKey)
      .set('language', 'pt-BR');
  }
}
