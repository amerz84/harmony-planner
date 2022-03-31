import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController, NavController } from '@ionic/angular';
import { Task } from '../task.model';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.page.html',
  styleUrls: ['./task-detail.page.scss'],
})
export class TaskDetailPage implements OnInit {
  loadedTask: Task;
  taskId: string;

  constructor(private taskService: TaskService,
    private activatedRoute: ActivatedRoute,
    private navCtrl: NavController,
    private alertCtrl: AlertController) { }

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

  async onDeleteTask() {
    const alert = await this.alertCtrl.create({
      header: 'Are you sure?',
      message: 'Do you want to delete this item?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'primary'
        },
        {
          text: 'Delete',
          role: 'delete',
          handler: () => {
            console.log(this.taskId);
            this.taskService.deleteTask(this.loadedTask.id);
            this.navCtrl.navigateBack('/task');
          }
        }
      ]
    });

    await alert.present();
  }

  onUpdateTask() {

  }

}
