import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NewTaskItemPage } from './new-task-item.page';

const routes: Routes = [
  {
    path: '',
    component: NewTaskItemPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NewTaskItemPageRoutingModule {}
