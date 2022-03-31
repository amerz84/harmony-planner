import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EditTaskItemPage } from './edit-task-item.page';

const routes: Routes = [
  {
    path: '',
    component: EditTaskItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EditTaskItemPageRoutingModule {}
