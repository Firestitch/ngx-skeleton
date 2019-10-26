import {
  Directive,
  ViewContainerRef,
  TemplateRef,
  Input,
  ComponentFactoryResolver,
} from '@angular/core';

import { FsSkeletBaseDirective } from './skelet-base.directive';
import { FsSkeletonBannerComponent } from '../components/banner/banner.component';


@Directive({
  selector: '[fsSkeletBanner]'
})
export class FsSkeletBannerDirective extends FsSkeletBaseDirective {

  @Input()
  set fsSkeletBanner(condition: any) {
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
