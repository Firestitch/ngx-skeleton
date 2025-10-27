import { Component } from '@angular/core';
import { FsSkeletonContentDirective } from '../../../../src/app/directives/skeleton-content.directive';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'custom-width',
    templateUrl: 'custom-width.component.html',
    standalone: true,
    imports: [FsSkeletonContentDirective, MatButton]
})
export class CustomWidthComponent {

  public loaded = false;

  public toggle() {
    this.loaded = !this.loaded;
  }
}
