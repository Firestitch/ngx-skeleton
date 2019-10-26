import { Component, Input } from '@angular/core';


@Component({
  selector: '[fsSkeletonForm]',
  templateUrl: 'skeleton-form.component.html',
  styleUrls: [ 'skeleton-form.component.scss' ]
})
export class FsSkeletonFormComponent {

  @Input('fsSkeletonForm') loaded = false;
}
