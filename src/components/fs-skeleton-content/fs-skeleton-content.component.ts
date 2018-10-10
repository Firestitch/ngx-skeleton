import { Component, Input } from '@angular/core';
import { FsSkeletonComponent } from './../fs-skeleton';

@Component({
  selector: '[fsSkeletonContent]',
  templateUrl: 'fs-skeleton-content.component.html',
  styleUrls: [ 'fs-skeleton-content.component.scss' ]
})
export class FsSkeletonContentComponent extends FsSkeletonComponent {

  @Input('fsSkeletonContent') loaded = false;

  constructor() {
    super();
  }
}
