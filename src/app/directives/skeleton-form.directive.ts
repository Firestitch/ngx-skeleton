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
import { FsSkeletonFormComponent } from '../components/form/form.component';


@Directive({
    selector: '[fsSkeletonForm]',
    standalone: true
})
export class FsSkeletonFormDirective extends FsSkeletonBaseDirective implements OnChanges {

  @Input()
  set fsSkeletonForm(condition: any) {
    this._context.$implicit = this._context.fsSkeletonForm = condition;
  }

  @Input('fsSkeletonFormLines')
  protected _pattern = [100, 100, 100];

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

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes.fsSkeletonForm) {
      this._updateView();
    }
  }

  protected _initComponent() {
    this._componentFactory = this._componentFactoryResolver.resolveComponentFactory(FsSkeletonFormComponent);
  }
}
