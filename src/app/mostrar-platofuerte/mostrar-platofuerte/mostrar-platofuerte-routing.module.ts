import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarPlatofuertePage } from './mostrar-platofuerte.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarPlatofuertePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarPlatofuertePageRoutingModule {}
