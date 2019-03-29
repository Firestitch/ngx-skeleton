import { Component, Input, SkipSelf } from '@angular/core';
import { ControlContainer } from '@angular/forms';

@Component({
  selector: '[fsSkeletonForm]',
  templateUrl: 'skeleton-form.component.html',
  styleUrls: [ 'skeleton-form.component.scss' ]
})
export class FsSkeletonFormComponent {

  @Input('fsSkeletonForm') loaded = false;
}
