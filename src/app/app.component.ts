import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Dynamic title';
  arr = [1, 2, 3];
  obj = {
    id: 1,
    name: 'test Name',
    c: {
      cname: 'test Cname'
    }
  };
  inputValue = '';
  constructor() {

  }
  onInput(event: any) {
    this.inputValue = (<HTMLInputElement>event.target).value;
  }
  onClick() {
    console.log('Click')
  }
  onBlur(str: string) {
    this.inputValue = str;
  }
}
