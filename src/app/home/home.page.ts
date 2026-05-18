import { Component, OnInit } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { DecimalPipe, DatePipe } from '@angular/common';

import {
  IonHeader, IonToolbar, IonContent, IonButton,
  IonIcon, IonChip, IonLabel, IonTabBar, IonTabButton
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import {
  notificationsOutline, homeOutline, home,
  starOutline, heartOutline, searchOutline
} from 'ionicons/icons';

import { MovieCardComponent } from '../components/movie-card/movie-card.component';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [
    RouterLink, RouterLinkActive, DecimalPipe, DatePipe,
    IonHeader, IonToolbar, IonContent, IonButton,
    IonIcon, IonChip, IonLabel, IonTabBar, IonTabButton,
    MovieCardComponent
  ]
})
export class HomePage implements OnInit {

  movies: any[] = [];
  bannerMovie: any = null;

  categories = ['Ação', 'Aventura', 'Comédia', 'Drama', 'Terror', 'Ficção'];

  constructor(private movieService: MovieService) {
    addIcons({ notificationsOutline, homeOutline, home, starOutline, heartOutline, searchOutline });
  }

  ngOnInit() {
    this.movieService.getPopularMovies().subscribe((response: any) => {
      this.movies = response.results;
      this.bannerMovie = response.results[0];
    });
  }

  getImageUrl(path: string) {
    return this.movieService.getImageUrl(path);
  }
}