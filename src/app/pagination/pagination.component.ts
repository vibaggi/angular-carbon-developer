import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  constructor() { }
  //O componente existe apenas para adiminstrar o numero da página que o usuario queira estar.
  @Input() maxPaginas = 1; //recebe informacao de numero de páginas
  @Input() totalItens = 5; //recebe a informacao e quantos itens tem
  @Output() emitDados: EventEmitter<any> = new EventEmitter(); //emite o numero atual 
  paginaAtual = 1
  numPaginas = 10

  ngOnInit() {
  }

  range(){
    return Array.from(Array(this.numPaginas).keys())
  }
}
