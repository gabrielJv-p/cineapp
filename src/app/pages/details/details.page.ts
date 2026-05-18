import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons } from '@ionic/angular/standalone';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  standalone: true,
  imports: [IonContent, IonHeader, IonTitle, IonToolbar, IonButton, IonButtons, CommonModule, FormsModule, RouterLink]
})
export class DetailsPage implements OnInit {

  movie: any;
  isFavorite = false;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService
  ) { }

  ngOnInit() {
    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.movieService.getMovieDetails(id).subscribe((response: any) => {
      this.movie = response;
      this.isFavorite = this.movieService.isFavorite(response.id);
    });
  }

  getPosterUrl() {
    return this.movie.poster_path ? this.movieService.getImageUrl(this.movie.poster_path) : '';
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
