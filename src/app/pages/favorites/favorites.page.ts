import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';

import {
  IonContent, IonHeader, IonTitle, IonToolbar,
  IonButton, IonButtons, IonIcon, IonLabel,
  IonTabBar, IonTabButton
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import {
  homeOutline, starOutline, heart, searchOutline,
  heartOutline, ellipsisVerticalOutline
} from 'ionicons/icons';

import { MovieService } from '../../services/movie.service';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, RouterLink, RouterLinkActive,
    IonContent, IonHeader, IonTitle, IonToolbar,
    IonButton, IonButtons, IonIcon, IonLabel,
    IonTabBar, IonTabButton,
    MovieCardComponent
  ]
})
export class FavoritesPage implements OnInit {

  movies: any[] = [];

  constructor(private movieService: MovieService) {
    addIcons({ homeOutline, starOutline, heart, searchOutline, heartOutline, ellipsisVerticalOutline });
  }

  ngOnInit() {
    this.movies = this.movieService.getFavorites();
  }
}