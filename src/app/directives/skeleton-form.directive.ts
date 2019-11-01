import {
  Directive,
  ViewContainerRef,
  TemplateRef,
  Input,
  ComponentFactoryResolver,
} from '@angular/core';

import { FsSkeletonBaseDirective } from './skeleton-base.directive';
import { FsSkeletonFormComponent } from '../components/form/form.component';


@Directive({
  selector: '[fsSkeletonForm]'
})
export class FsSkeletonFormDirective extends FsSkeletonBaseDirective {

  @Input()
  set fsSkeletonForm(condition: any) {
    this._context.$implicit = this._context.fsSkeletonForm = condition;
    this._updateView();
  }

  protected _context: { $implicit: any, fsSkeletonForm: any } = {
    $implicit: null,
    fsSkeletonForm: null,
  };

  constructor(
    protected _viewContainer: ViewContainerRef,
    protected _componentFactoryResolver: ComponentFactoryResolver,
    templateRef: TemplateRef<any>,
  ) {
    super(_viewContainer, _componentFactoryResolver, templateRef);
  }

  protected _initComponent() {
    this._componentFactory = this._componentFactoryResolver.resolveComponentFactory(FsSkeletonFormComponent);
  }
}
