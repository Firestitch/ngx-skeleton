import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fs-skeleton-content',
  templateUrl: './content.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsSkeletonContentComponent {}
