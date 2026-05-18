import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';   
import { MovieService } from '../../services/movie.service';

import {
  IonContent,
  IonHeader,
  IonTitle,
  IonToolbar,
  IonButton,
  IonButtons,
  IonSpinner
} from '@ionic/angular/standalone';

import { RouterLink } from '@angular/router';

import { ForMoviesDirective } from '../../directives/for-movies.directive';
import { IfLoadingDirective } from '../../directives/if-loading.directive';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';

@Component({
  selector: 'app-rated_movies',
  templateUrl: './rated_movies.page.html',
  standalone: true,
  imports: [
    CommonModule,

    IonContent,
    IonHeader,
    IonTitle,
    IonToolbar,
    IonButton,
    IonButtons,
    IonSpinner,

    RouterLink,

    ForMoviesDirective,
    IfLoadingDirective,
    MovieCardComponent
  ]
})
export class Rated_moviesPage implements OnInit {

  loading = true;

  movies: any[] = [];
  constructor(private movieService: MovieService) {}

  ngOnInit(): void {
    this.movieService.getTopRatedMovies().subscribe((response: any) => {
      this.movies = response.results;
      this.loading = false;
    });
  }
}