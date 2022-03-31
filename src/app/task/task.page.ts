import { TaskService } from './task.service';
import { Component } from '@angular/core';
import { Task } from './task.model';

@Component({
  selector: 'app-task',
  templateUrl: './task.page.html',
  styleUrls: ['./task.page.scss'],
})
export class TaskPage {
  tasks: Task[];

  constructor(private taskService: TaskService) { }

  ionViewWillEnter(){
    this.tasks = this.taskService.getAllTasks();
  }

}
