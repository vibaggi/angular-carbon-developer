import { Component } from '@angular/core';

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


}
