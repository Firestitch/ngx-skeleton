import { Component } from '@angular/core';
import { FsSkeletonContentDirective } from '../../../../src/app/directives/skeleton-content.directive';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'example',
    templateUrl: 'example.component.html',
    standalone: true,
    imports: [FsSkeletonContentDirective, MatButton]
})
export class ExampleComponent {

  public loaded = false;

  public toggle() {
    this.loaded = !this.loaded;
  }
}
