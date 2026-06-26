import { Service, signal } from '@angular/core';

@Service()
export class ThemeService {
  private readonly _isDark = signal(false);

  readonly isDark = this._isDark.asReadonly();

  setTheme(theme: 'light' | 'dark'): void {
    this._isDark.set(theme === 'dark');
  }

  toggleTheme() {
    this._isDark.update((value) => !value);
  }
}
