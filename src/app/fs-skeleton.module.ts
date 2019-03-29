import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FsSkeletonBannerComponent } from './components/skeleton-banner/skeleton-banner.component';
import { FsSkeletonContentComponent } from './components/skeleton-content/skeleton-content.component';
import { FsSkeletonFormComponent } from './components/skeleton-form/skeleton-form.component';
import { NgForm } from '@angular/forms';


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
  ],
  providers: [
    NgForm
  ]
})
export class FsSkeletonModule {

}
