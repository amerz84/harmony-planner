import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskPage } from './task.page';

const routes: Routes = [
  {
    path: '',
    component: TaskPage
  },
  {
    path: 'new-task-item',
    loadChildren: () => import('./new-task-item/new-task-item.module').then( m => m.NewTaskItemPageModule)
  },
  {
    path: ':taskId',
    children: [
      {
        path: 'edit-task-item',
        loadChildren: () => import('./edit-task-item/edit-task-item.module').then( m => m.EditTaskItemPageModule)
      },
      {
        path: '',
        loadChildren: () => import('./task-detail/task-detail.module').then( m => m.TaskDetailPageModule),
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskPageRoutingModule {}
