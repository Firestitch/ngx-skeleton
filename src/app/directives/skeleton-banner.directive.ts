import {
  Directive,
  ViewContainerRef,
  TemplateRef,
  Input,
  ComponentFactoryResolver,
  OnChanges,
  SimpleChanges,
} from '@angular/core';

import { FsSkeletonBaseDirective } from './skeleton-base.directive';
import { FsSkeletonBannerComponent } from '../components/banner/banner.component';


@Directive({
    selector: '[fsSkeletonBanner]',
    standalone: true
})
export class FsSkeletonBannerDirective extends FsSkeletonBaseDirective implements OnChanges {

  @Input()
  set fsSkeletonBanner(condition: any) {
    this._context.$implicit = this._context.fsSkeletonBanner = condition;
    this._updateView();
  }

  @Input('fsSkeletonBannerLines')
  protected _pattern = [100, 81];

  protected _context: { $implicit: any, fsSkeletonBanner: any } = {
    $implicit: null,
    fsSkeletonBanner: null,
  };

  constructor(
    protected _viewContainer: ViewContainerRef,
    protected _componentFactoryResolver: ComponentFactoryResolver,
    templateRef: TemplateRef<any>,
  ) {
    super(_viewContainer, _componentFactoryResolver, templateRef);
  }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.fsSkeletonBanner) {
      this._updateView();
    }
  }

  protected _initComponent() {
    this._componentFactory = this._componentFactoryResolver.resolveComponentFactory(FsSkeletonBannerComponent);
  }
}
