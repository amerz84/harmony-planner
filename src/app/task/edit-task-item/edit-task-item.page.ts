import { TaskService } from '../task.service';
import { Component, OnInit } from '@angular/core';
import { Task } from '../task.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-task-item',
  templateUrl: './edit-task-item.page.html',
  styleUrls: ['./edit-task-item.page.scss'],
})
export class EditTaskItemPage implements OnInit {
  taskId: string;
  loadedTask: Task;

  constructor(private taskService: TaskService, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('taskId')) {
        // redirect
        return;
      }
      this.taskId = paramMap.get('taskId');
      this.loadedTask = this.taskService.getTask(this.taskId);
    });
  }

}
