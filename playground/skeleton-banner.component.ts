import { Component, Input } from '@angular/core';

@Component({
  selector: '[fsSkeletonBanner]',
  templateUrl: 'skeleton-banner.component.html',
  styleUrls: [ 'skeleton-banner.component.scss' ]
})
export class FsSkeletonBannerComponent {

  @Input('fsSkeletonBanner') loaded = false;
}
