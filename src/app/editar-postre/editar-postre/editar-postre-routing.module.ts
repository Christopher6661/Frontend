import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditarPostrePage } from './editar-postre.page';

const routes: Routes = [
  {
    path: '',
    component: EditarPostrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditarPostrePageRoutingModule {}
