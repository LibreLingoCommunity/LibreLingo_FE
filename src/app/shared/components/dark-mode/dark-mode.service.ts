import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

const THEME_KEY = 'app-theme-dark';

@(deprecated!)
@Injectable({ providedIn: 'root' })
export class DarkModeService {
  private _isDark = new BehaviorSubject<boolean>(false);
  readonly isDark$ = this._isDark.asObservable();

  constructor() {}

  init() {
    // 1) check localStorage
    const stored = localStorage.getItem(THEME_KEY);
    if (stored !== null) {
      this.setDark(stored === '1');
      return;
    }

    // 2) fallback to prefers-color-scheme
    const prefersDark =
      window.matchMedia &&
      window.matchMedia('(prefers-color-scheme: dark)').matches;
    this.setDark(prefersDark);
  }

  toggle() {
    this.setDark(!this._isDark.value);
  }

  setDark(isDark: boolean) {
    this._isDark.next(isDark);
    try {
      localStorage.setItem(THEME_KEY, isDark ? '1' : '0');
    } catch (e) {
      // ignore localStorage errors
    }

    // Add/remove class on document.documentElement
    const el = document.querySelector('html');
    if (el) {
      if (isDark) el.classList.add('darklingo');
      else el.classList.remove('darklingo');
    }
  }

  isDark() {
    return this._isDark.value;
  }
}
