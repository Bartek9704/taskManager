import { Injectable } from '@angular/core';
import { ITask } from './task.model';

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: ITask[] = [];

  constructor() { }

  getTasks(): ITask[] {
    return this.tasks;
  }

  addTask(task: ITask): void {
    this.tasks.push(task);
  }

  // Implement other methods for updating, deleting, etc.
}
