import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { Task } from 'src/app/models/task-model/task-interface';
import { UiServiceService } from 'src/app/services/ui-service.service';

@Component({
  selector: 'app-add-task-form',
  templateUrl: './add-task-form.component.html',
  styleUrls: ['./add-task-form.component.css']
})
export class AddTaskFormComponent implements OnInit {
	@Output() onFormSubmit: EventEmitter<Task> = new EventEmitter();

	// TODO: add fisrt focus to the input element when mount ...
	// @ts-ignore
	// @ViewChild() firstFocus: HTMLInputElement;

	newTask: Task = {text: '', day: '', reminder: false};
	// @ts-ignore
	showAddTask: boolean;
	subscription: Subscription;

  constructor(private uiService: UiServiceService) {
	this.subscription = this.uiService.onToggle().subscribe(value => this.showAddTask = value);
   }

  ngOnInit(): void {
  }

  onSubmit() {
	this.onFormSubmit.emit(this.newTask);

	this.newTask = {text: '', day: '', reminder: false};
  }
}
