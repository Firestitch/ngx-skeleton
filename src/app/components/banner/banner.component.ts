import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'fs-skeleton-banner',
    templateUrl: './banner.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgStyle],
})
export class FsSkeletonBannerComponent {
  config = inject<any>('skeletonConfig' as any);
}
