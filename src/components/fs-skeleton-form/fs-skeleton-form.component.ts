import { Component, Input } from '@angular/core';

@Component({
  selector: '[fsSkeletonForm]',
  templateUrl: 'fs-skeleton-form.component.html',
  styleUrls: [ 'fs-skeleton-form.component.scss' ]
})
export class FsSkeletonFormComponent {

  @Input('fsSkeletonForm') loaded = false;
}
