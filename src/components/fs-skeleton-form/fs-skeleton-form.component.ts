import { Component } from '@angular/core';
import { FsSkeletonComponent } from '../fs-skeleton';

@Component({
  selector: '[fsSkeletonForm]',
  templateUrl: 'fs-skeleton-form.component.html',
  styleUrls: [ 'fs-skeleton-form.component.scss' ]
})
export class FsSkeletonFormComponent extends FsSkeletonComponent {

  constructor() {
    super();
  }
}
