import { Directive, ElementRef, Renderer2, HostListener, HostBinding } from '@angular/core';

@Directive({
  selector: '[scroll-shadow]'
})
export class ScrollShadowDirective {

  constructor(private elementRef: ElementRef, private renderer: Renderer2) { }

  // ngAfterContentInit(){
  //   this.scrollVerify()
  // }

  ngDoCheck(){
    this.scrollVerify
  }
  // @HostBinding('style.box-shadow') shadow: string;
  @HostBinding('class.shadow') classShadow: boolean;

  @HostListener('scroll') scrollVerify(){
    if((this.elementRef.nativeElement.scrollHeight-this.elementRef.nativeElement.scrollTop-this.elementRef.nativeElement.clientHeight) == 0){
      // this.shadow = "none";
      this.classShadow = false;
    }else{
      // this.shadow = "inset -5px -5px 10px -4px";
      this.classShadow = true;
    }
  }

}
