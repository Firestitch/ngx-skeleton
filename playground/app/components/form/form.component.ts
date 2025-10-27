import { Component } from '@angular/core';
import { FsSkeletonFormDirective } from '../../../../src/app/directives/skeleton-form.directive';
import { MatFormField } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { MatSelect } from '@angular/material/select';
import { MatOption } from '@angular/material/core';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'example-form',
    styles: ['.mat-form-field { display: block; }'],
    templateUrl: 'form.component.html',
    standalone: true,
    imports: [FsSkeletonFormDirective, MatFormField, MatInput, MatSelect, MatOption, MatButton]
})
export class FormComponent {
  public loaded = false;

  public toggle() {
    this.loaded = !this.loaded;
  }
}
