import { Component, Input } from '@angular/core';

import {
  IonCard,
  IonCardHeader,
  IonCardTitle
} from '@ionic/angular/standalone';

import { HighlightDirective } from '../../directives/highlight.directive';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  standalone: true,
  imports: [
    IonCard,
    IonCardHeader,
    IonCardTitle,
    HighlightDirective
  ]
})
export class MovieCardComponent {

  @Input() movie: any;

}