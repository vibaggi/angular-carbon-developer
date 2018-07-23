import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ModalConfirmComponent } from './modal-confirm/modal-confirm.component';

const routes: Routes = [
  {path: "home", component:ModalConfirmComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
