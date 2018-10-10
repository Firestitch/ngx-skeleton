import { Component } from '@angular/core';
import { FsSkeletonComponent } from './../fs-skeleton';

@Component({
  selector: '[fsSkeletonContent]',
  templateUrl: 'fs-skeleton-content.component.html',
  styleUrls: [ 'fs-skeleton-content.component.scss' ]
})
export class FsSkeletonContentComponent extends FsSkeletonComponent {

  constructor() {
    super();
  }
}
