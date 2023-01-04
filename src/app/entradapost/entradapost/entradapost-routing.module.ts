import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EntradapostPage } from './entradapost.page';

const routes: Routes = [
  {
    path: '',
    component: EntradapostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EntradapostPageRoutingModule {}
