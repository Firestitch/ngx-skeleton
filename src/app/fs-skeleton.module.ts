import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgForm } from '@angular/forms';
import { FsSkeletonDirective } from './directives/skeleton.directive';


@NgModule({
  imports: [
    CommonModule,
  ],
  exports: [
    FsSkeletonDirective
  ],
  declarations: [
    FsSkeletonDirective
  ],
  providers: [
    NgForm
  ]
})
export class FsSkeletonModule {

}
