import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlatosfuertesPage } from './platosfuertes.page';

const routes: Routes = [
  {
    path: '',
    component: PlatosfuertesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlatosfuertesPageRoutingModule {}
