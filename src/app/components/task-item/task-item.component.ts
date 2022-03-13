import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Task } from 'src/app/models/task-model/task-interface';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
	// @ts-ignore
	@Input() task: Task;

	@Output() onTaskDelete: EventEmitter<Task> = new EventEmitter();
	@Output() onToggleReminder: EventEmitter<Task> = new EventEmitter();

	faTrash = faTrash;

  constructor() { }

  ngOnInit(): void {
  }

  onDelete(task: Task) {
	this.onTaskDelete.emit(task);
  }

  onToggle (task: Task) {
	  this.onToggleReminder.emit(task);
  }

}
