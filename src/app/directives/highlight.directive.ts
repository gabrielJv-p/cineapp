import {
  Directive,
  ElementRef,
  Input,
  OnInit,
  Renderer2
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true
})
export class HighlightDirective implements OnInit {

  @Input() appHighlight = 0;

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {

    if (this.appHighlight >= 8) {

      this.renderer.setStyle(
        this.el.nativeElement,
        'border',
        '3px solid gold'
      );

      this.renderer.setStyle(
        this.el.nativeElement,
        'border-radius',
        '10px'
      );
    }
  }
}