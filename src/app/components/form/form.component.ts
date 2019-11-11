import { ChangeDetectionStrategy, Component, Inject } from '@angular/core';

@Component({
  selector: 'fs-skeleton-form',
  templateUrl: './form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsSkeletonFormComponent {
  constructor(
    @Inject('skeletonConfig') public config
  ) {}
}
