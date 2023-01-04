import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarEntradaPage } from './mostrar-entrada.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarEntradaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarEntradaPageRoutingModule {}
