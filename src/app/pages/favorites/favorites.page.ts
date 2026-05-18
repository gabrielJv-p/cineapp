import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import { MovieCardComponent } from '../../components/movie-card/movie-card.component';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, CommonModule, FormsModule, RouterLink, MovieCardComponent]
})
export class FavoritesPage implements OnInit {

  movies: any[] = [];

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.movies = this.movieService.getFavorites();
  }

}
