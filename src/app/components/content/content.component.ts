import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';

@Component({
  selector: 'fs-skeleton-content',
  templateUrl: './content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsSkeletonContentComponent {
  constructor(
    @Inject('skeletonConfig') public config
  ) {}
}
