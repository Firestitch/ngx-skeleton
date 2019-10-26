import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgForm } from '@angular/forms';

import { FsSkeletonBannerComponent } from './components/banner/banner.component';
import { FsSkeletonFormComponent } from './components/form/form.component';
import { FsSkeletonContentComponent } from './components/content/content.component';

import { FsSkeletContentDirective } from './directives/skelet-content.directive';
import { FsSkeletFormDirective } from './directives/skelet-form.directive';
import { FsSkeletBannerDirective } from './directives/skelet-banner.directive';


@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    FsSkeletContentDirective,
    FsSkeletFormDirective,
    FsSkeletBannerDirective,
  ],
  declarations: [
    FsSkeletonBannerComponent,
    FsSkeletonFormComponent,
    FsSkeletonContentComponent,

    FsSkeletContentDirective,
    FsSkeletFormDirective,
    FsSkeletBannerDirective,
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
