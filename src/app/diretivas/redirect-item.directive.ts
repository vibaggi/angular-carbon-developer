import { Directive, HostListener, HostBinding, Input } from '@angular/core';
import { Router } from '@angular/router';
@Directive({
  selector: '[redirect-item]'
})
export class RedirectItemDirective {

  constructor(private router: Router) { 
    this.cursor = 'pointer';
  }

  //Pode ser usado em TR de tables, listas e outros elementos.
  //Irá redirecionar a página para o endereço passado pelo atributo Redirect.
  //O valor do item é guardo na sessionStorage
  
  @Input() item = null 
  @Input() redirect = null

  @HostListener('click') clickMouse(){
    sessionStorage.setItem("item-store",this.item)
    this.router.navigate([this.redirect])
  }

  @HostBinding('style.cursor') cursor: string;
}
