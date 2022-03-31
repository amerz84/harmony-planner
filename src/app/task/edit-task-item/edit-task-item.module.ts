import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EditTaskItemPageRoutingModule } from './edit-task-item-routing.module';

import { EditTaskItemPage } from './edit-task-item.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EditTaskItemPageRoutingModule
  ],
  declarations: [EditTaskItemPage]
})
export class EditTaskItemPageModule {}
