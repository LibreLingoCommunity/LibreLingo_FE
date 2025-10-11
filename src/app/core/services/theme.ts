// src/app/core/stores/theme/theme.service.ts
import { inject, Injectable } from '@angular/core';
import { ThemeStore } from '@app/core/stores/theme/theme';

@Injectable({ providedIn: 'root' })
export class ThemeService {
  private readonly themeStore = inject(ThemeStore);

  // Getter
  mode = this.themeStore.mode;

  // Actions
  toggleTheme() {
    this.themeStore.toggleTheme();

    // Add/remove class on document.documentElement
    const el = document.querySelector('html');
    if (el) {
      if (this.mode() === 'dark') el.classList.add('darklingo');
      else el.classList.remove('darklingo');
    }
  }
}
