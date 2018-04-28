import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding} from '@angular/core';

@Directive({
  selector: '[appMuchBetterHighlight]'
})
export class MuchBetterHighlightDirective implements OnInit{

  @HostBinding('style.backgroundColor') backgroundColor: string = 'transparent';

  constructor(private elementRef : ElementRef, private renderer : Renderer2) { }

  ngOnInit(){
    //this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor','yellow',false, false);
  }

  @HostListener('mouseenter') mouseover (eventData: Event) {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor','yellow');
    this.backgroundColor='yellow';
  }
  @HostListener('mouseleave') mouseleave (eventData: Event) {
    //this.renderer.setStyle(this.elementRef.nativeElement, 'backgroundColor','transparent');
    this.backgroundColor='transparent';
  }
}
