import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'fs-skeleton-content',
    templateUrl: './content.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgStyle],
})
export class FsSkeletonContentComponent {
  constructor(
    @Inject('skeletonConfig') public config
  ) {}
}
