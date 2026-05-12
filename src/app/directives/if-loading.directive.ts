import {
  Directive,
  Input,
  TemplateRef,
  ViewContainerRef
} from '@angular/core';

@Directive({
  selector: '[appIfLoading]',
  standalone: true
})
export class IfLoadingDirective {

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef
  ) {}

  @Input()
  set appIfLoading(condition: boolean) {

    this.viewContainer.clear();

    if (condition) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }
  }
}