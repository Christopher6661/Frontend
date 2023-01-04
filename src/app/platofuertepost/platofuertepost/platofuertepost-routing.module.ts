import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PlatofuertepostPage } from './platofuertepost.page';

const routes: Routes = [
  {
    path: '',
    component: PlatofuertepostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PlatofuertepostPageRoutingModule {}
