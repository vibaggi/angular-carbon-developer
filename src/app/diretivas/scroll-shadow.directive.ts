import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[appScrollShadow]'
})
export class ScrollShadowDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  ngAfterContentInit(){
    this.scrollVerify()
  }
  @HostBinding('style.box-shadow') shadow: string;

  @HostListener('scroll') scrollVerify(){
    if((this.elementRef.nativeElement.scrollHeight-this.elementRef.nativeElement.scrollTop-this.elementRef.nativeElement.clientHeight) == 0){
      this.shadow = "none";
    }else{
      this.shadow = "inset -5px -5px 10px -4px";
    }
  }

}
