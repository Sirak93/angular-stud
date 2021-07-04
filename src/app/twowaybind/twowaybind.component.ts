import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-twowaybind',
  templateUrl: './twowaybind.component.html',
  styleUrls: ['./twowaybind.component.scss']
})
export class TwowaybindComponent implements OnInit {
  title = 'oloil';
  backgroundToggle = false;
  constructor() { }

  ngOnInit(): void {
  }
  onInput(event: any) {
    this.title = event.target.value;
  }

}
