import { ViewContainerRef, TemplateRef, ComponentFactoryResolver, EmbeddedViewRef, ComponentRef, OnDestroy, ComponentFactory, Injector, Directive, inject } from '@angular/core';
import { FsSkeletonBannerComponent } from '../components/banner/banner.component';
import { FsSkeletonContentComponent } from '../components/content/content.component';
import { FsSkeletonFormComponent } from '../components/form/form.component';


@Directive()
export class FsSkeletonBaseDirective implements OnDestroy {
  protected _viewContainer = inject(ViewContainerRef);
  protected _componentFactoryResolver = inject(ComponentFactoryResolver);


  protected _pattern = [];
  protected _context: { $implicit: any };

  protected _contentTemplateRef: TemplateRef<any>|null = null;
  protected _contentViewRef: EmbeddedViewRef<any>|null = null;

  protected _skeletonRef: ComponentRef<
    FsSkeletonBannerComponent | FsSkeletonContentComponent | FsSkeletonFormComponent> | null = null;

  protected _componentFactory: ComponentFactory<
    FsSkeletonBannerComponent | FsSkeletonContentComponent | FsSkeletonFormComponent> | null = null;

  constructor() {
    const templateRef = inject<TemplateRef<any>>(TemplateRef);

    this._contentTemplateRef = templateRef;
  }

  public ngOnDestroy(): void {
    if (this._skeletonRef) {
      this._skeletonRef.destroy();
    }
  }

  protected _updateView() {
    if (this._context.$implicit) {
      if (!this._contentViewRef) {
        this._viewContainer.clear();

        if (this._skeletonRef) {
          this._skeletonRef.destroy();
        }

        this._skeletonRef = null;

        if (this._contentTemplateRef) {
          this._contentViewRef = this._viewContainer.createEmbeddedView(this._contentTemplateRef, this._context);
        }
      }
    } else {
      if (!this._skeletonRef) {
        this._viewContainer.clear();
        this._contentViewRef = null;

        if (!this._componentFactory) {
          this._initComponent();
        }

        const injector = Injector.create({
          providers: [
            {
              provide: 'skeletonConfig',
              useValue: {
                pattern: this._pattern,
              }
            }
          ]
        });

        this._skeletonRef = this._viewContainer.createComponent(this._componentFactory, void 0, injector);
      }
    }
  }

  protected _initComponent() {}
}
