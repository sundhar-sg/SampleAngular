import { Component } from '@angular/core';
import { ServerBP } from "../cockpit/cockpit.component";

@Component({
	selector: 'app-server-blueprint',
	templateUrl: './server-blueprint.component.html',
	styleUrls: ['./server-blueprint.component.css']
})
export class ServerBlueprintComponent {

	serverElements :ServerBP[] = [];

}