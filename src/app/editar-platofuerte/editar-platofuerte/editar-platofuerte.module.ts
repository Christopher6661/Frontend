import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditarPlatofuertePageRoutingModule } from './editar-platofuerte-routing.module';

import { EditarPlatofuertePage } from './editar-platofuerte.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditarPlatofuertePageRoutingModule
  ],
  declarations: [EditarPlatofuertePage]
})
export class EditarPlatofuertePageModule {}
