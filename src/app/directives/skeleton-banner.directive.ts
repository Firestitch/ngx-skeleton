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
    this._condition = condition;
    this._updateView();
  }

  protected _skeletonType = 'content';

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
