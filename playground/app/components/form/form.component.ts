import { Component } from '@angular/core';

@Component({
  selector: 'example-form',
  styles: ['.mat-form-field { display: block; }'],
  templateUrl: 'form.component.html'
})
export class FormComponent {
  public loaded = false;

  constructor() {
    setTimeout(() => {
      this.loaded = true;
    }, 4000);
  }
}
