import { Component } from '@angular/core';

@Component({
  selector: 'custom-width',
  templateUrl: 'custom-width.component.html'
})
export class CustomWidthComponent {

  public loaded = false;

  public toggle() {
    this.loaded = !this.loaded;
  }
}
