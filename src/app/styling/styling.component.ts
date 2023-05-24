import { Component } from '@angular/core';

@Component({
  selector: 'app-styling',
  templateUrl: './styling.component.html',
  styleUrls: ['./styling.component.css']
})
export class StylingComponent {
  buttonStatus = true;
  log: Date[] = [];


  toggleParaView() {
    this.buttonStatus = !this.buttonStatus;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}
