import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'app';

  arrayTable = [
    {
      nome: "Maria",
      idade: 15,
      data: "10/05/2018"
    },
    {
      nome: "Luiz",
      idade: 20,
      data: "12/05/2018"
    }

  ]


  @ViewChild('divScroll') divScroll: ElementRef
  cards = [1,2,3,4,5,6,7,8,9,1,2,3,4,5]
  scrollH = 0


  exibir(){
    // console.log(this.divScroll.nativeElement.scrollHeight-this.divScroll.nativeElement.scrollTop-this.divScroll.nativeElement.clientHeight)
    // console.log(this.divScroll.nativeElement.scrollHeight,this.divScroll.nativeElement.scrollTop)

    console.log(this.divScroll)
    // this.divScroll.nativeElement.scrollTop = this.divScroll.nativeElement.scrollHeight
    }

}
