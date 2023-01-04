import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlatofuertepostPageRoutingModule } from './platofuertepost-routing.module';

import { PlatofuertepostPage } from './platofuertepost.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlatofuertepostPageRoutingModule
  ],
  declarations: [PlatofuertepostPage]
})
export class PlatofuertepostPageModule {}
