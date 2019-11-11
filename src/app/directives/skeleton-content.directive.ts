import {
  Directive,
  ViewContainerRef,
  TemplateRef,
  Input,
  ComponentFactoryResolver,
  SimpleChanges,
  OnChanges,
} from '@angular/core';

import { FsSkeletonBaseDirective } from './skeleton-base.directive';
import { FsSkeletonContentComponent } from '../components/content/content.component';


@Directive({
  selector: '[fsSkeleton]'
})
export class FsSkeletonContentDirective extends FsSkeletonBaseDirective implements OnChanges {

  @Input()
  set fsSkeleton(condition: any) {
    this._context.$implicit = this._context.fsSkeleton = condition;
  }

  @Input('fsSkeletonPattern')
  protected _pattern = [100, 90, 80, 100];

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

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.fsSkeleton) {
      this._updateView();
    }
  }

  protected _initComponent() {
    this._componentFactory = this._componentFactoryResolver.resolveComponentFactory(FsSkeletonContentComponent);
  }
}
