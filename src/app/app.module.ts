import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';
import { TableComponent } from './table/table.component';
import { RedirectItemDirective } from './diretivas/redirect-item.directive';



@NgModule({
  declarations: [
    AppComponent,
    ModalConfirmComponent,
    TableComponent,
    RedirectItemDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
