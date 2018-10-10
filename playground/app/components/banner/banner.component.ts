import { Component } from '@angular/core';

@Component({
  selector: 'example-banner',
  styles: [''],
  templateUrl: 'banner.component.html'
})
export class BannerComponent {
  public loaded = false;

  public toggle() {
    this.loaded = !this.loaded;
  }
}
