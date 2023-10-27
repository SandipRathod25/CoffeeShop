import { Component } from '@angular/core';

@Component({
  selector: 'app-last-footer',
  templateUrl: './last-footer.component.html',
  styleUrls: ['./last-footer.component.less']
})
export class LastFooterComponent {
  public scrollToTop(): void {
    const scrollStep = -window.scrollY / 20;
    const scrollInterval = setInterval(function () {
      if (window.scrollY === 0) {
        clearInterval(scrollInterval);
      } else {
        window.scrollBy(0, scrollStep);
      }
    }, 150);
  }
}
