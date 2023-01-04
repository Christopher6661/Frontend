import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MostrarPostrePage } from './mostrar-postre.page';

const routes: Routes = [
  {
    path: '',
    component: MostrarPostrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MostrarPostrePageRoutingModule {}
