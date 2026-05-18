import { Component, OnInit, inject } from '@angular/core';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonButton } from '@ionic/angular/standalone';
import { RouterLink } from '@angular/router';
import { MovieService } from '../services/movie.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [IonHeader, IonToolbar, IonTitle, IonContent, IonButton, RouterLink],
})
export class HomePage implements OnInit {

  private movieService = inject(MovieService);

  ngOnInit() {
    this.movieService.getPopularMovies().subscribe((response: any) => {
      console.log('Filmes:', response.results);
    });
  }
}