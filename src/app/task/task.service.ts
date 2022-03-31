import { Injectable } from '@angular/core';
import { Task } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  tasks: Task[] = [
    {
      id: '1',
      title: 'First item',
      completed: true,
      details: 'This is the first task!!'
    },
    {
      id: '2',
      title: '2nd item',
      completed: false,
      details: 'This is the second task!!'
    },
  ];

  constructor() { }

  //Return copy of array of Task
  getAllTasks(): Task[] {
    console.log('getting all');
    return [...this.tasks];
  }

  //Return Task object if there is a match on the id field
  getTask(taskId: string): Task {
    return {
      ...this.tasks.find(task => task.id === taskId)
    };
  }

  updateTask(taskId: string): void {
  }

  deleteTask(taskId: string) {
    console.log(taskId + ' deleted.');
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }
}
