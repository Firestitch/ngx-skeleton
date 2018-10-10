import { Component } from '@angular/core';

@Component({
  selector: 'example-banner',
  styles: [''],
  templateUrl: 'banner.component.html'
})
export class BannerComponent {
  public loaded = false;

  constructor() {
    setTimeout(() => {
      this.loaded = true;
    }, 4000);
  }
}
