import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'fs-skeleton-form',
  templateUrl: './form.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsSkeletonFormComponent {}
