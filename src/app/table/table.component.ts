import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor() { }

  @Input() labelFieldName = [] //Nomes das colunas que serão exibidas. Caso não se defina, será usado o nome dos campos do JSON. 
  @Input() array = []
  @Input() redirect = null
  fieldNameArray = [] //auxiliar para extrair os dados do JSON

  extractFildNames(array){
    //Extrai o nome das colunas apenas da primeira linha
    
      for (var name in array[0]) {
        this.fieldNameArray.push(name)
      }

      if(this.labelFieldName.length == 0) this.labelFieldName = this.fieldNameArray //Caso não seja definido os labels das colunas será usado o extraido do JSON
    
  }
  ngOnInit() {
    this.extractFildNames(this.array)   
  }

}
