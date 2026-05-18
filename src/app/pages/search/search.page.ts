import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

import {
  IonContent, IonHeader, IonTitle, IonToolbar,
  IonSearchbar, IonButton, IonButtons, IonIcon,
  IonLabel, IonTabBar, IonTabButton
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import {
  homeOutline, starOutline, heartOutline,
  searchOutline, search
} from 'ionicons/icons';

import { MovieService } from '../../services/movie.service';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, RouterLink, RouterLinkActive,
    IonContent, IonHeader, IonTitle, IonToolbar,
    IonSearchbar, IonButton, IonButtons, IonIcon,
    IonLabel, IonTabBar, IonTabButton,
    MovieCardComponent
  ]
})
export class SearchPage implements OnInit {

  movies: any[] = [];

  constructor(private movieService: MovieService) {
    addIcons({ homeOutline, starOutline, heartOutline, searchOutline, search });
  }

  ngOnInit() {}

  searchMovie(event: any) {
    const query = event.detail.value;

    if (!query) {
      this.movies = [];
      return;
    }

    this.movieService.searchMovies(query).subscribe((response: any) => {
      this.movies = response.results;
    });
  }
}