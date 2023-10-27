import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.less'],

})
export class NavbarComponent {
  menu: boolean = false;

  handleMenu() {
    this.menu = !this.menu
  }
  constructor() { }

  ngOnInit(): void {
  }

  scrollToSection(sectionId: string): void {
    const section = document.getElementById(sectionId);

    if (section) {
      this.smoothScrollTo(section);
    }
  }

  smoothScrollTo(element: HTMLElement): void {
    const offsetTop = element.getBoundingClientRect().top;
    const startPosition = window.pageYOffset;
    const duration = 800;
    let startTime: number;

    function scrollAnimation(currentTime: number) {
      if (!startTime) {
        startTime = currentTime;
      }

      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);
      window.scrollTo(0, startPosition + offsetTop * progress);

      if (timeElapsed < duration) {
        requestAnimationFrame(scrollAnimation);
      }
    }

    requestAnimationFrame(scrollAnimation);
  }

}
