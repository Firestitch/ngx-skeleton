import {
  Directive,
  ViewContainerRef,
  TemplateRef,
  Input,
  ComponentFactoryResolver,
} from '@angular/core';

import { FsSkeletonBaseDirective } from './skeleton-base.directive';
import { FsSkeletonBannerComponent } from '../components/banner/banner.component';


@Directive({
  selector: '[fsSkeletonBanner]'
})
export class FsSkeletonBannerDirective extends FsSkeletonBaseDirective {

  @Input()
  set fsSkeletonBanner(condition: any) {
    this._context.$implicit = this._context.fsSkeletonBanner = condition;
    this._updateView();
  }

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

  protected _initComponent() {
    this._componentFactory = this._componentFactoryResolver.resolveComponentFactory(FsSkeletonBannerComponent);
  }
}
