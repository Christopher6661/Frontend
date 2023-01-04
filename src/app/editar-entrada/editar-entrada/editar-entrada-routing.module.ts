import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarEntradaPage } from './editar-entrada.page';

const routes: Routes = [
  {
    path: '',
    component: EditarEntradaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarEntradaPageRoutingModule {}
