import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';

import { FsSkeletonFormComponent } from '../components/form/form.component';

import { FsSkeletonBaseDirective } from './skeleton-base.directive';


@Directive({
  selector: '[fsSkeletonForm]',
  standalone: true,
})
export class FsSkeletonFormDirective extends FsSkeletonBaseDirective implements OnChanges {

  @Input()
  public set fsSkeletonForm(condition: any) {
    this._context.$implicit = this._context.fsSkeletonForm = condition;
  }

  @Input('fsSkeletonFormLines')
  protected _pattern = [100, 100, 100];

  protected _context: { $implicit: any, fsSkeletonForm: any } = {
    $implicit: null,
    fsSkeletonForm: null,
  };

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.fsSkeletonForm) {
      this._updateView();
    }
  }

  protected _initComponent() {
    this._componentFactory = this._componentFactoryResolver.resolveComponentFactory(FsSkeletonFormComponent);
  }
}
