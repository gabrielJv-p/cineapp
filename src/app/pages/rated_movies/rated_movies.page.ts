import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MovieService } from '../../services/movie.service';

import {
  IonContent, IonHeader, IonTitle, IonToolbar,
  IonButton, IonButtons, IonSpinner, IonChip,
  IonIcon, IonLabel, IonTabBar, IonTabButton
} from '@ionic/angular/standalone';

import { RouterLink, RouterLinkActive } from '@angular/router';
import { addIcons } from 'ionicons';
import {
  homeOutline, star, heartOutline, searchOutline
} from 'ionicons/icons';

import { ForMoviesDirective } from '../../directives/for-movies.directive';
import { IfLoadingDirective } from '../../directives/if-loading.directive';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';

@Component({
  selector: 'app-rated_movies',
  templateUrl: './rated_movies.page.html',
  styleUrls: ['./rated_movies.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    IonContent, IonHeader, IonTitle, IonToolbar,
    IonButton, IonButtons, IonSpinner, IonChip,
    IonIcon, IonLabel, IonTabBar, IonTabButton,
    RouterLink, RouterLinkActive,
    ForMoviesDirective, IfLoadingDirective, MovieCardComponent
  ]
})
export class Rated_moviesPage implements OnInit {

  loading = true;
  movies: any[] = [];
  filters = ['Em Alta', 'Mais Assistidos', 'Lançamentos', 'Breve'];
  activeFilter = 'Em Alta';

  constructor(private movieService: MovieService) {
    addIcons({ homeOutline, star, heartOutline, searchOutline });
  }

  ngOnInit(): void {
    this.movieService.getTopRatedMovies().subscribe((response: any) => {
      this.movies = response.results;
      this.loading = false;
    });
  }
}