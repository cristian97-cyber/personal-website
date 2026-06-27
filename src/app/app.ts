import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, DestroyRef, effect, inject, PLATFORM_ID } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { RouterOutlet } from '@angular/router';
import { MainNavbar } from './components/main-navbar/main-navbar';
import { LayoutService } from './services/layout.service';

@Component({
  selector: 'app-root',
  imports: [MainNavbar, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  readonly document = inject(DOCUMENT);
  readonly platformId = inject(PLATFORM_ID);
  readonly themeService = inject(ThemeService);
  readonly layoutService = inject(LayoutService);
  readonly destroyRef = inject(DestroyRef);

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
      const setWindowHeight = () => {
        this.layoutService.setWindowHeight(window.innerHeight);
      };

      setWindowHeight();
      window.addEventListener('resize', setWindowHeight);

      this.destroyRef.onDestroy(() => {
        window.removeEventListener('resize', setWindowHeight);
      });
    }
  }
}
