import {
  ViewContainerRef,
  TemplateRef,
  ComponentFactoryResolver,
  EmbeddedViewRef,
  ComponentRef,
  OnDestroy,
  ComponentFactory,
} from '@angular/core';
import { FsSkeletonBannerComponent } from '../components/banner/banner.component';
import { FsSkeletonContentComponent } from '../components/content/content.component';
import { FsSkeletonFormComponent } from '../components/form/form.component';

export class FsSkeletonBaseDirective implements OnDestroy {

  protected _condition = true;

  protected _contentTemplateRef: TemplateRef<any>|null = null;
  protected _contentViewRef: EmbeddedViewRef<any>|null = null;

  protected _skeletonRef: ComponentRef<
    FsSkeletonBannerComponent | FsSkeletonContentComponent | FsSkeletonFormComponent> | null = null;

  protected _componentFactory: ComponentFactory<
    FsSkeletonBannerComponent | FsSkeletonContentComponent | FsSkeletonFormComponent> | null = null;

  protected _skeletonType;

  constructor(
    protected _viewContainer: ViewContainerRef,
    protected _componentFactoryResolver: ComponentFactoryResolver,
    templateRef: TemplateRef<any>,
  ) {
    this._contentTemplateRef = templateRef;
  }

  public ngOnDestroy(): void {
    if (this._skeletonRef) {
      this._skeletonRef.destroy();
    }
  }

  protected _updateView() {
    if (this._condition) {
      if (!this._contentViewRef) {
        this._viewContainer.clear();

        if (this._skeletonRef) {
          this._skeletonRef.destroy();
        }

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
