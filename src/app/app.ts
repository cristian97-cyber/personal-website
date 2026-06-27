import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, DestroyRef, effect, inject, NgZone, PLATFORM_ID } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { RouterOutlet } from '@angular/router';
import { MainNavbar } from './components/main-navbar/main-navbar';
import { LayoutService } from './services/layout.service';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  imports: [MainNavbar, RouterOutlet, Footer],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly document = inject(DOCUMENT);
  readonly platformId = inject(PLATFORM_ID);
  readonly themeService = inject(ThemeService);
  readonly layoutService = inject(LayoutService);
  readonly destroyRef = inject(DestroyRef);
  readonly ngZone = inject(NgZone);

  constructor() {
    this.initTheme();
    this.initWindowHeight();
  }

  private initTheme(): void {
    if (isPlatformBrowser(this.platformId)) {
      let theme = localStorage.getItem('theme');
      if (!theme) {
        const prefersDark = window.matchMedia?.('(prefers-color-scheme: dark)').matches ?? false;
        theme = prefersDark ? 'dark' : 'light';
      }

      this.themeService.setTheme(theme as 'light' | 'dark');

      effect(() => {
        const dark = this.themeService.isDark();
        this.document.documentElement.classList.toggle('dark', dark);
        localStorage.setItem('theme', dark ? 'dark' : 'light');
      });
    }
  }

  private initWindowHeight(): void {
    if (isPlatformBrowser(this.platformId)) {
      let resizeTimeoutId: ReturnType<typeof setTimeout> | null = null;

      const setWindowHeight = () => {
        this.layoutService.setWindowHeight(window.innerHeight);
      };

      const debounceWindowHeight = () => {
        if (resizeTimeoutId) {
          clearTimeout(resizeTimeoutId);
        }

        resizeTimeoutId = setTimeout(() => {
          this.ngZone.run(setWindowHeight);
        }, 150);
      };

      setWindowHeight();
      this.ngZone.runOutsideAngular(() => {
        window.addEventListener('resize', debounceWindowHeight);
      });

      this.destroyRef.onDestroy(() => {
        window.removeEventListener('resize', debounceWindowHeight);

        if (resizeTimeoutId) {
          clearTimeout(resizeTimeoutId);
        }
      });
    }
  }
}
