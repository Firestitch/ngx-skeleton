import { Component } from '@angular/core';
import { FsSkeletonBannerDirective } from '../../../../src/app/directives/skeleton-banner.directive';
import { MatButton } from '@angular/material/button';

@Component({
    selector: 'example-banner',
    styles: [''],
    templateUrl: 'banner.component.html',
    standalone: true,
    imports: [FsSkeletonBannerDirective, MatButton]
})
export class BannerComponent {
  public loaded = false;

  public toggle() {
    this.loaded = !this.loaded;
  }
}
