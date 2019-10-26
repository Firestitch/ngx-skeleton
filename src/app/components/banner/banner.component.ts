import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fs-skeleton-banner',
  templateUrl: './banner.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsSkeletonBannerComponent {}
