import { Component, Input } from '@angular/core';

@Component({
  selector: '[fsSkeletonBanner]',
  templateUrl: 'fs-skeleton-banner.component.html',
  styleUrls: [ 'fs-skeleton-banner.component.scss' ]
})
export class FsSkeletonBannerComponent {

  @Input('fsSkeletonBanner') loaded = false;
}
