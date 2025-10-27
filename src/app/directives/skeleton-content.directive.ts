import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';

import { FsSkeletonContentComponent } from '../components/content/content.component';

import { FsSkeletonBaseDirective } from './skeleton-base.directive';


@Directive({
  selector: '[fsSkeleton]',
  standalone: true,
})
export class FsSkeletonContentDirective extends FsSkeletonBaseDirective implements OnChanges {


  @Input()
  public set fsSkeleton(condition: any) {
    this._context.$implicit = this._context.fsSkeleton = condition;
  }

  @Input('fsSkeletonPattern')
  protected _pattern = [100, 90, 80, 100];

  protected _context: { $implicit: any, fsSkeleton: any } = {
    $implicit: null,
    fsSkeleton: null,
  };

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.fsSkeleton) {
      this._updateView();
    }
  }

  protected _initComponent() {
    this._componentFactory = this._componentFactoryResolver.resolveComponentFactory(FsSkeletonContentComponent);
  }
}
