import {
  Directive,
  ViewContainerRef,
  TemplateRef,
  Input,
  ComponentFactoryResolver,
} from '@angular/core';

import { FsSkeletonBaseDirective } from './skeleton-base.directive';
import { FsSkeletonContentComponent } from '../components/content/content.component';


@Directive({
  selector: '[fsSkeleton]'
})
export class FsSkeletonContentDirective extends FsSkeletonBaseDirective {

  @Input()
  set fsSkeleton(condition: any) {
    this._context.$implicit = this._context.fsSkeleton = condition;
    this._updateView();
  }

  protected _context: { $implicit: any, fsSkeleton: any } = {
    $implicit: null,
    fsSkeleton: null,
  };

  constructor(
    protected _viewContainer: ViewContainerRef,
    protected _componentFactoryResolver: ComponentFactoryResolver,
    templateRef: TemplateRef<any>,
  ) {
    super(_viewContainer, _componentFactoryResolver, templateRef);
  }

  protected _initComponent() {
    this._componentFactory = this._componentFactoryResolver.resolveComponentFactory(FsSkeletonContentComponent);
  }
}
