import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: '[fsSkeletonContent]',
  templateUrl: 'skeleton-content.component.html',
  styleUrls: [ 'skeleton-content.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsSkeletonContentComponent {

  @Input('fsSkeletonContent') loaded = false;
}
