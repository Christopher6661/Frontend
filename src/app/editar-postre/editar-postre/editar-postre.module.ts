import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarPostrePageRoutingModule } from './editar-postre-routing.module';

import { EditarPostrePage } from './editar-postre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarPostrePageRoutingModule
  ],
  declarations: [EditarPostrePage]
})
export class EditarPostrePageModule {}
