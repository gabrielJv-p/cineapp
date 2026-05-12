import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef,
  OnChanges
} from '@angular/core';

interface MovieContext<T> {
  $implicit: T;
  index: number;
}

@Directive({
  selector: '[appForMovies]',
  standalone: true
})
export class ForMoviesDirective<T> implements OnChanges {

  @Input() appForMovies: T[] = [];

  constructor(
    private templateRef: TemplateRef<MovieContext<T>>,
    private viewContainer: ViewContainerRef
  ) {}

  ngOnChanges(): void {
    this.viewContainer.clear();

    this.appForMovies.forEach((movie, index) => {
      this.viewContainer.createEmbeddedView(this.templateRef, {
        $implicit: movie,
        index
      });
    });
  }
}