import { Component } from '@angular/core';

@Component({
  selector: 'example',
  templateUrl: 'example.component.html'
})
export class ExampleComponent {

  public loaded = false;

  constructor() {
    setTimeout(() => {
      this.loaded = true;
    }, 4000);
  }
}
