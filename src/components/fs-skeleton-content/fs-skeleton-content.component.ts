import { Component, Input } from '@angular/core';

@Component({
  selector: '[fsSkeletonContent]',
  templateUrl: 'fs-skeleton-content.component.html',
  styleUrls: [ 'fs-skeleton-content.component.scss' ]
})
export class FsSkeletonContentComponent {

  @Input('fsSkeletonContent') loaded = false;
}
