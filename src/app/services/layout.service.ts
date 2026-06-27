import { Service, signal } from '@angular/core';

@Service()
export class LayoutService {
  private readonly _windowHeight = signal(0);
  private readonly _mainNavbarHeight = signal(0);

  readonly mainNavbarHeight = this._mainNavbarHeight.asReadonly();
  readonly windowHeight = this._windowHeight.asReadonly();

  setMainNavbarHeight(height: number) {
    this._mainNavbarHeight.set(height);
  }

  setWindowHeight(height: number) {
    this._windowHeight.set(height);
  }
}
