import { Component, OnInit } from '@angular/core';
import { CommonModule, DecimalPipe, DatePipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, RouterLink } from '@angular/router';

import {
  IonContent, IonHeader, IonTitle, IonToolbar,
  IonButton, IonButtons, IonBackButton, IonSpinner,
  IonIcon, IonChip
} from '@ionic/angular/standalone';

import { addIcons } from 'ionicons';
import { heart, heartOutline } from 'ionicons/icons';

import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
  standalone: true,
  imports: [
    CommonModule, FormsModule, RouterLink, DecimalPipe, DatePipe,
    IonContent, IonHeader, IonTitle, IonToolbar,
    IonButton, IonButtons, IonBackButton, IonSpinner,
    IonIcon, IonChip
  ]
})
export class DetailsPage implements OnInit {

  movie: any;
  isFavorite = false;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) {
    addIcons({ heart, heartOutline });
  }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.movieService.getMovieDetails(id).subscribe((response: any) => {
      this.movie = response;
      this.isFavorite = this.movieService.isFavorite(response.id);
    });
  }

  getPosterUrl() {
    if (this.movie.poster_path) {
      return this.movieService.getImageUrl(this.movie.poster_path);
    } else if (this.movie.backdrop_path) {
      return this.movieService.getImageUrl(this.movie.backdrop_path);
    }
    return '';
  }
  toggleFavorite() {
    if (this.isFavorite) {
      this.movieService.removeFavorite(this.movie.id);
      this.isFavorite = false;
      return;
    }

    this.movieService.addFavorite(this.movie);
    this.isFavorite = true;
  }
}