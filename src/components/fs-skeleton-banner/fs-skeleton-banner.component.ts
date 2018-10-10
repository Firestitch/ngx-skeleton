import { Component } from '@angular/core';
import { FsSkeletonComponent } from '../fs-skeleton';

@Component({
  selector: '[fsSkeletonBanner]',
  templateUrl: 'fs-skeleton-banner.component.html',
  styleUrls: [ 'fs-skeleton-banner.component.scss' ]
})
export class FsSkeletonBannerComponent extends FsSkeletonComponent {

  constructor() {
    super();
  }
}
