import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modal-confirm',
  templateUrl: './modal-confirm.component.html',
  styleUrls: ['./modal-confirm.component.scss']
})
export class ModalConfirmComponent implements OnInit {

  constructor(private router: Router) { }

  //Incluir escuta closeModal para saber quando o modal quer ser fechado. Fechar no pai com *ngIf
  @Output() emitBtn1: EventEmitter<any> = new EventEmitter();
  @Output() emitBtn2: EventEmitter<any> = new EventEmitter();

  //Declarar no componente pai os textos a serem exibidos
  @Input() msg = "" //Mensagem do corpo
  @Input() title = "" //Titulo
  @Input() subTitle = "" //opcional
  @Input() labelBtn1 = "" //Label do botao de confirmar
  @Input() labelBtn2 = null //Label do botao 2 (é opcional e será construido apenas se passar um texto por imput)
  @Input() redirect1 = null //Inserir o redirect fará o modal redirecionar a página após clicar no botao
  @Input() redirect2 = null //Inserir o redirect fará o modal redirecionar a página após clicar no botao

  ngOnInit() {
  }

  confirmBtn1(){
    if(this.redirect1 != null) this.router.navigate([this.redirect1])
    this.emitBtn1.emit()
  }

  confirmBtn2(){
    if(this.redirect2 != null) this.router.navigate([this.redirect2])
    this.emitBtn2.emit()
  }
}
