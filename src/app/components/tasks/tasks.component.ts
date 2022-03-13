import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task-model/task-interface';
import { TaskService } from 'src/app/services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
	tasks: Task[] = [];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
	  this.taskService.getTasks().subscribe(tasks => this.tasks = tasks);
  }

  deleteTask(task: Task): void {
	  this.taskService.deleteTask(task).subscribe(() => this.tasks = this.tasks.filter(_task => _task.id !== task.id));
  }

  // TODO: update reminder bug ... need to be fixed ...
  toggleReminder(task: Task): void {
	  task.reminder = !task.reminder;
	  this.taskService.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task): void {
	this.taskService.addNewTask(task).subscribe(_task => this.tasks.push(_task));
  }

}
