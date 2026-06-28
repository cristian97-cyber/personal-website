import { DOCUMENT, isPlatformBrowser } from '@angular/common';
import { Component, effect, inject, PLATFORM_ID } from '@angular/core';
import { ThemeService } from './services/theme.service';
import { RouterOutlet } from '@angular/router';
import { MainNavbar } from './components/main-navbar/main-navbar';
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

  constructor() {
    this.initTheme();
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
}
