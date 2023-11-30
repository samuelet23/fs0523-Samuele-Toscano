import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appColoraTesto]'
})
export class ColoraTestoDirective {

  constructor(private element: ElementRef) { }

 ngOnInit(){
  this.element.nativeElement.style.color = 'purple'
 }
}
