import { Service, signal } from '@angular/core';

@Service()
export class LayoutService {
  private readonly _mainNavbarHeight = signal(0);

  readonly mainNavbarHeight = this._mainNavbarHeight.asReadonly();

  setMainNavbarHeight(height: number) {
    this._mainNavbarHeight.set(height);
  }
}
