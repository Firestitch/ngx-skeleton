import {
  ViewContainerRef,
  TemplateRef,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  ComponentRef,
} from '@angular/core';

export class FsSkeletBaseDirective {

  protected _condition = true;

  protected _contentTemplateRef: TemplateRef<any>|null = null;
  protected _contentViewRef: EmbeddedViewRef<any>|null = null;

  protected _skeletonRef: ComponentRef<any>|null = null;
  protected _componentFactory;

  protected _skeletonType;

  constructor(
    protected _viewContainer: ViewContainerRef,
    protected _componentFactoryResolver: ComponentFactoryResolver,
    templateRef: TemplateRef<any>,
  ) {
    this._contentTemplateRef = templateRef;
  }

  protected _updateView() {
    if (this._condition) {
      if (!this._contentViewRef) {
        this._viewContainer.clear();
        this._skeletonRef = null;

        if (this._contentTemplateRef) {
          this._contentViewRef = this._viewContainer.createEmbeddedView(this._contentTemplateRef);
        }
      }
    } else {
      if (!this._skeletonRef) {
        this._viewContainer.clear();
        this._contentViewRef = null;

        if (!this._componentFactory) {
          this._initComponent();
        }


        this._skeletonRef = this._viewContainer.createComponent(this._componentFactory);

      }
    }
  }

  protected _initComponent() {}
}
