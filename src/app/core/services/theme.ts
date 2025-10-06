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
    document.documentElement.classList.toggle('dark', this.mode() === 'dark');
  }
}
