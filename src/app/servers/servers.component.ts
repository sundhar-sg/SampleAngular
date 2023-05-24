import { Component } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  // selector: '.app-servers',
  // template: `
  //   <app-server></app-server>
  //   <app-server></app-server>`,
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
	allowNewServer: boolean = false;
	serverCreationStatus = "No server was created!";
	serverName = "Test Server";
	serverCreated = false;
	servers: string[] = ['TestServer', 'TestServer2'];

	constructor() {
		setTimeout(
			() => {
				this.allowNewServer = true;
			}, 2000
		)
	}

	onCreateServer() {
		this.serverCreated = true;
		this.servers.push(this.serverName);
		this.serverCreationStatus = "Server has been created :) with the name of " +this.serverName;
	}

	onUpdateServerName(event: Event) {
		this.serverName = (<HTMLInputElement>event.target).value;
	}
}
