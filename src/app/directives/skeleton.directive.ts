import { ElementRef, Directive, OnDestroy, Input, HostBinding } from '@angular/core';

@Directive({
  selector: '[fsSkeleton],[fsSkeletonForm],[fsSkeletonContent],[fsSkeletonBanner]'
})
export class FsSkeletonDirective implements OnDestroy {

  private _skeletonEl: Element;

  @HostBinding('class.fs-skeleton-hide') hideContent = false;

  @Input('fsSkeleton') set setSekeleton(value) {
    const skeleton = `<div class="fs-skeleton-content">
                        <div class="fs-skeleton-line skeleton-line1"></div>
                        <div class="fs-skeleton-line skeleton-line2"></div>
                        <div class="fs-skeleton-line skeleton-line3"></div>
                        <div class="fs-skeleton-line skeleton-line4"></div>
                      </div>`;
    this.toggle(value, skeleton);
  }

  @Input('fsSkeletonForm') set setSkeletonForm(value) {
    const skeleton = `<div class="fs-skelton-form">
                        <div class="fs-skeleton-line"></div>
                        <div class="fs-skeleton-line"></div>
                        <div class="fs-skeleton-line"></div>
                        <div class="fs-skeleton-button"></div>
                      </div>`;
    this.toggle(value, skeleton);
  }

  @Input('fsSkeletonContent') set setSekeletonContent(value) {
    this.setSekeleton = value;
  }

  @Input('fsSkeletonBanner') set setSekeletonBanner(value) {
    const skeleton = `<div class="fs-skeleton-banner">
                      <div class="fs-skeleton-avatar"></div>
                      <div class="skeleton-lines">
                        <div class="fs-skeleton-line skeleton-line1"></div>
                        <div class="fs-skeleton-line skeleton-line2"></div>
                      </div>
                    </div>`;
    this.toggle(value, skeleton);
  }

  constructor(private element: ElementRef) {}

  private toggle(value, skeleton) {
    this.hideContent = !value;
    this.remove();

    if (!value) {
      this._skeletonEl = document.createElement('div');
      this._skeletonEl.classList.add('fs-skeleton');

      this._skeletonEl.innerHTML = skeleton;

      const el = this.element.nativeElement;
      el.parentNode.insertBefore(this._skeletonEl, el.nextSibling);
    }
  }

  ngOnDestroy() {
    this.remove();
  }

  private remove() {
    if (this._skeletonEl) {
      this._skeletonEl.remove();
    }
  }
}
