import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NewTaskItemPageRoutingModule } from './new-task-item-routing.module';

import { NewTaskItemPage } from './new-task-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NewTaskItemPageRoutingModule
  ],
  declarations: [NewTaskItemPage]
})
export class NewTaskItemPageModule {}
