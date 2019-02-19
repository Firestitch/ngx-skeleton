import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FsSkeletonBannerComponent } from './components/skeleton-banner/skeleton-banner.component';
import { FsSkeletonContentComponent } from './components/skeleton-content/skeleton-content.component';
import { FsSkeletonFormComponent } from './components/skeleton-form/skeleton-form.component';


@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    FsSkeletonContentComponent,
    FsSkeletonFormComponent,
    FsSkeletonBannerComponent
  ],
  entryComponents: [],
  declarations: [
    FsSkeletonContentComponent,
    FsSkeletonFormComponent,
    FsSkeletonBannerComponent
  ]
})
export class FsSkeletonModule {
  /*static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsSkeletonModule
    };
  }*/
}
