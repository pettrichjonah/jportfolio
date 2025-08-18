import { Component, ElementRef, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navigation-bar',
  imports: [],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.sass'
})
export class NavigationBarComponent {

  public currentRoute = "";
  public isStuck = false;

  @ViewChild('navbar') navbar!: ElementRef;

  constructor(public router: Router) { }

  public ngOnInit(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        const url = this.router.url;
        this.currentRoute = url.startsWith('/') ? url.slice(1) : url;
      });

    const observer = new IntersectionObserver(
      ([entry]) => {
        this.isStuck = !entry.isIntersecting;
      },
      { threshold: [1.0] }
    );

    const sentinel = document.getElementById('nav-sentinel');
    if (sentinel) {
      observer.observe(sentinel);
    }
  }

  public getCurrentRoute(): string {
    switch (this.currentRoute) {
      case "":
        return "Welcome";
      case "spotlight":
        return "Spotlight";
      case "videos":
        return "Videos";
      case "projects":
        return "Projects";
      case "aboutme":
        return "About me";
      default:
        return "Got lost?";
    }
  }

  public scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
