import { Component } from '@angular/core';

@Component({
  selector: 'app-styling',
  templateUrl: './styling.component.html',
  styleUrls: ['./styling.component.css']
})
export class StylingComponent {
  buttonStatus = true;
  log: Date[] = [];

  numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  switchValue: number = 10;

  onlyOdd = false;

  toggleParaView() {
    this.buttonStatus = !this.buttonStatus;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}
