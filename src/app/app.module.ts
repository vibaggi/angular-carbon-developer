import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms' 
import { AppComponent } from './app.component';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';
import { TableComponent } from './table/table.component';
import { RedirectItemDirective } from './diretivas/redirect-item.directive';
import { PaginationComponent } from './pagination/pagination.component';
import { ScrollShadowDirective } from './diretivas/scroll-shadow.directive';



@NgModule({
  declarations: [
    AppComponent,
    ModalConfirmComponent,
    TableComponent,
    RedirectItemDirective,
    PaginationComponent,
    ScrollShadowDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
