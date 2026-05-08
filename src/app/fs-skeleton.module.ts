import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { FsSkeletonBannerDirective } from './directives/skeleton-banner.directive';
import { FsSkeletonContentDirective } from './directives/skeleton-content.directive';
import { FsSkeletonFormDirective } from './directives/skeleton-form.directive';


@NgModule({
  imports: [
    CommonModule,
    FsSkeletonContentDirective,
    FsSkeletonFormDirective,
    FsSkeletonBannerDirective,
  ],
  exports: [
    FsSkeletonContentDirective,
    FsSkeletonFormDirective,
    FsSkeletonBannerDirective,
  ],
})
export class FsSkeletonModule {

}
