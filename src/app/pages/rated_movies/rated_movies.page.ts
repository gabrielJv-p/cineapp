import { Component, OnInit } from '@angular/core';

import { CommonModule } from '@angular/common';

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

  movies = [
    {
      title: 'Interestelar',
      vote_average: 9
    },
    {
      title: 'Batman',
      vote_average: 7
    },
    {
      title: 'Matrix',
      vote_average: 8.5
    }
  ];

  ngOnInit(): void {

    setTimeout(() => {
      this.loading = false;
    }, 2000);

  }
}