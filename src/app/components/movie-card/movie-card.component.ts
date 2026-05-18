import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

import {
  IonCard,
  IonCardHeader,
  IonCardTitle
} from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';

import { HighlightDirective } from '../../directives/highlight.directive';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  standalone: true,
  imports: [
    IonCard,
    IonCardHeader,
    IonCardTitle,
    HighlightDirective,
    RouterLink,
    CommonModule
  ]
})
export class MovieCardComponent {

  @Input() movie: any;

  constructor(private movieService: MovieService) {}

  getPosterUrl() {
    return this.movie.poster_path ? this.movieService.getImageUrl(this.movie.poster_path) : '';
  }

}
