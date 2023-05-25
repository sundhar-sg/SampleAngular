import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, ContentChild, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewEncapsulation } from '@angular/core';
import { ServerBP } from '../cockpit/cockpit.component';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input() element: ServerBP = {type: "", name: "", content: ""};
  @ContentChild("contentParagraph", {static: true}) paragraph: ElementRef = new ElementRef(null);

  constructor() {
    console.log("Constructor called :)");
  }

  ngOnChanges(changes: SimpleChanges): void {
      console.log("ngOnChanges called :)");
      console.log(changes);
  }

  ngOnInit(): void {
      console.log("ngOnInit called :)");
      console.log(this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log("ngDoCheck called :)");
  }

  ngAfterContentInit(): void {
      console.log("ngAfterContentInit called :)");
      console.log(this.paragraph.nativeElement.textContent);
  }

  ngAfterContentChecked(): void {
      console.log("ngAfterContentChecked called :)");
  }

  ngAfterViewInit(): void {
      console.log("ngAfterViewInit called :)");
      console.log(this.paragraph.nativeElement.textContent);
  }

  ngAfterViewChecked(): void {
      console.log("ngAfterViewChecked called :)");
  }

  ngOnDestroy(): void {
      console.log("ngOnDestory called :)");
  }
} 