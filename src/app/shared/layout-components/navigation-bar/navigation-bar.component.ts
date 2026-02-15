import { Component, ElementRef, ViewChild, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs';

@Component({
  selector: 'app-navigation-bar',
  imports: [],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.sass'
})
export class NavigationBarComponent {
  private router = inject(Router);

  public currentRoute = "";
  public isStuck = false;
  public isMobile = window.matchMedia("(max-device-width: 800px)").matches;

  @ViewChild('navbar') navbar!: ElementRef;

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
      case "spotlight":
        return "Spotlight";
      case "videos":
        return "Videos";
      case "projects":
        return "Projects";
      case "aboutme":
        return "About me";
      default:
        return "Welcome";
    }
  }

  public scrollToTop(): void {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
