import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostrepostPage } from './postrepost.page';

const routes: Routes = [
  {
    path: '',
    component: PostrepostPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostrepostPageRoutingModule {}
