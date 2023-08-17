import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service'; // Update the path accordingly
import { ITask } from '../task.model'; // Update the path accordingly

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {
  tasks: ITask[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.tasks = this.taskService.getTasks(); // Assuming getTasks() returns an array of tasks
  }
}
