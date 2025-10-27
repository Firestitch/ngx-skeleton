import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { NgStyle } from '@angular/common';

@Component({
    selector: 'fs-skeleton-form',
    templateUrl: './form.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    standalone: true,
    imports: [NgStyle],
})
export class FsSkeletonFormComponent {
  config = inject<any>('skeletonConfig' as any);
}
