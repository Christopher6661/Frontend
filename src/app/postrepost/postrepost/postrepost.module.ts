import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PostrepostPageRoutingModule } from './postrepost-routing.module';

import { PostrepostPage } from './postrepost.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PostrepostPageRoutingModule
  ],
  declarations: [PostrepostPage]
})
export class PostrepostPageModule {}
