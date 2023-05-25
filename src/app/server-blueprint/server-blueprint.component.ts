import { Component } from '@angular/core';
import { ServerBP } from "../cockpit/cockpit.component";

@Component({
	selector: 'app-server-blueprint',
	templateUrl: './server-blueprint.component.html',
	styleUrls: ['./server-blueprint.component.css']
})
export class ServerBlueprintComponent {

	serverElements :ServerBP[] = [{type: 'server', name: 'Test Server 1', content: 'Just a test server'}];

	onServerAdded(serverData: {serverName: string, serverContent: string}) {
		this.serverElements.push({type: 'server', name: serverData.serverName, content: serverData.serverContent});
	}

	onBlueprintAdded(blueprintData: {serverName: string, serverContent: string}) {
		this.serverElements.push({type: 'blueprint', name: blueprintData.serverName, content: blueprintData.serverContent });
  	}
}