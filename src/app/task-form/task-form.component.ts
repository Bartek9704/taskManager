import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service'; // Import your task service
import { ITask } from '../task.model'; // Import your task model interface

@Component({
  selector: 'app-task-form',
  templateUrl: './task-form.component.html',
  styleUrls: ['./task-form.component.scss']
})
export class TaskFormComponent implements OnInit {
  task: ITask = {
    title: '',
    description: '',
    dueDate: null,
    priority: 'medium'
  };

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
  }

  onSubmit(): void {
    if (this.task.title.trim() === '') {
      return; // Prevent adding empty tasks
    }

    // Call the task service to add the task
    this.taskService.addTask(this.task);

    // Reset the form
    this.task = {
      title: '',
      description: '',
      dueDate: null,
      priority: 'medium'
    };
  }
}
