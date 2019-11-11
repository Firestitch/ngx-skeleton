import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';

@Component({
  selector: 'fs-skeleton-banner',
  templateUrl: './banner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsSkeletonBannerComponent {
  constructor(
    @Inject('skeletonConfig') public config
  ) {}
}
