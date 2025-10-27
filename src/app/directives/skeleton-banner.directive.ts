import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';

import { FsSkeletonBannerComponent } from '../components/banner/banner.component';

import { FsSkeletonBaseDirective } from './skeleton-base.directive';


@Directive({
  selector: '[fsSkeletonBanner]',
  standalone: true,
})
export class FsSkeletonBannerDirective extends FsSkeletonBaseDirective implements OnChanges {

  @Input()
  public set fsSkeletonBanner(condition: any) {
    this._context.$implicit = this._context.fsSkeletonBanner = condition;
    this._updateView();
  }

  @Input('fsSkeletonBannerLines')
  protected _pattern = [100, 81];

  protected _context: { $implicit: any, fsSkeletonBanner: any } = {
    $implicit: null,
    fsSkeletonBanner: null,
  };

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.fsSkeletonBanner) {
      this._updateView();
    }
  }

  protected _initComponent() {
    this._componentFactory = this._componentFactoryResolver.resolveComponentFactory(FsSkeletonBannerComponent);
  }
}
