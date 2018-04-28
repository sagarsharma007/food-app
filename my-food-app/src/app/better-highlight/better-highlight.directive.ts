import { Directive, Renderer2, ElementRef } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {

  constructor(private elementRef : ElementRef, private renderer : Renderer2) { }

  ngOnInit() {
    this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor','aqua');
  }

}
