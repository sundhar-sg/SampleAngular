import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online {
            color: white;
        }
    `]
})
export class ServerComponent {
    serverID: number = 10;
    serverURL: string = "localhost";
    serverPort: number = 4200;
    serverStatus: string = "";

    constructor() {
        this.serverStatus = Math.random() > 0.5 ? 'Online' : 'Offline';
    }

    getColor() {
        return this.serverStatus === 'Online' ? 'green' : 'red';
    }
}