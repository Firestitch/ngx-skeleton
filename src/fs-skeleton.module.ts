import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FsSkeletonContentComponent,
          FsSkeletonFormComponent,
          FsSkeletonBannerComponent } from './components';


@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    FsSkeletonContentComponent,
    FsSkeletonFormComponent,
    FsSkeletonBannerComponent
  ],
  entryComponents: [
  ],
  declarations: [
    FsSkeletonContentComponent,
    FsSkeletonFormComponent,
    FsSkeletonBannerComponent
  ]
})
export class FsSkeletonModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: FsSkeletonModule
    };
  }
}
