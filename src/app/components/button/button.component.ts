import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit {
	// @ts-ignore
	@Input() color: string;
	// @ts-ignore
	@Input() text: string;

	@Output() onClick = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  onButtonClick() {
	  this.onClick.emit();
  }

}
