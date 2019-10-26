import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';

import { FsSkeletonBannerComponent } from './components/banner/banner.component';
import { FsSkeletonFormComponent } from './components/form/form.component';
import { FsSkeletonContentComponent } from './components/content/content.component';

import { FsSkeletonContentDirective } from './directives/skeleton-content.directive';
import { FsSkeletonFormDirective } from './directives/skeleton-form.directive';
import { FsSkeletonBannerDirective } from './directives/skeleton-banner.directive';


@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    FsSkeletonContentDirective,
    FsSkeletonFormDirective,
    FsSkeletonBannerDirective,
  ],
  declarations: [
    FsSkeletonBannerComponent,
    FsSkeletonFormComponent,
    FsSkeletonContentComponent,

    FsSkeletonContentDirective,
    FsSkeletonFormDirective,
    FsSkeletonBannerDirective,
  ],
  entryComponents: [
    FsSkeletonBannerComponent,
    FsSkeletonFormComponent,
    FsSkeletonContentComponent,
  ],
  providers: [
    NgForm
  ]
})
export class FsSkeletonModule {

}
