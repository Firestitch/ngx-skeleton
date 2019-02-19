import { Component, Input } from '@angular/core';

@Component({
  selector: '[fsSkeletonContent]',
  templateUrl: 'skeleton-content.component.html',
  styleUrls: [ 'skeleton-content.component.scss' ]
})
export class FsSkeletonContentComponent {

  @Input('fsSkeletonContent') loaded = false;
}
