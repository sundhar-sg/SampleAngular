import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

export interface ServerBP {
	type: string;
	name: string;
	content: string;
}

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {

	@Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
	@Output() blueprintCreated  = new EventEmitter<{serverName: string, serverContent: string}>();
	// newServerName = '';
	// newServerContent = '';

	@ViewChild("serverContentInput") serverContentInput: ElementRef = new ElementRef(null);

	constructor() { }

	ngOnInit() {
		
	}

	onAddServer(nameInput: HTMLInputElement) {
		this.serverCreated.emit({serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value});
	}

	onAddBlueprint(nameInput: HTMLInputElement) {
		this.blueprintCreated.emit({serverName: nameInput.value, serverContent: this.serverContentInput.nativeElement.value})
 	}
}