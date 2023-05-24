import { Component, OnInit } from '@angular/core';

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

	newServerName = '';
	newServerContent = '';

	constructor() { }

	ngOnInit() {
		
	}

	onAddServer() {
		this.serverElements.push({type: 'server', name: this.newServerName, content: this.newServerContent});
	}

	onAddBlueprint() {
		this.serverElements.push({type: 'blueprint', name: this.newServerName, content: this.newServerContent });
  	}
}