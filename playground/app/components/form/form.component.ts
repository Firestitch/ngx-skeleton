import { Component } from '@angular/core';

@Component({
  selector: 'example-form',
  styles: ['.mat-form-field { display: block; }'],
  templateUrl: 'form.component.html'
})
export class FormComponent {
  public loaded = false;

  public toggle() {
    this.loaded = !this.loaded;
  }
}
