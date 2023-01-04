import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PlatosfuertesPageRoutingModule } from './platosfuertes-routing.module';

import { PlatosfuertesPage } from './platosfuertes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlatosfuertesPageRoutingModule
  ],
  declarations: [PlatosfuertesPage]
})
export class PlatosfuertesPageModule {}
