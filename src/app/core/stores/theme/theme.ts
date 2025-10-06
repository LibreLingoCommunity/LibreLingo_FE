// src/app/core/stores/theme/theme.store.ts
import { Theme } from '@app/core/models/theme';
import { patchState, signalStore, withMethods, withState } from '@ngrx/signals';

export const ThemeStore = signalStore(
  { providedIn: 'root' },

  withState<Theme>({ mode: 'light' }),

  withMethods((store) => ({
    toggleTheme() {
      patchState(store, {
        mode: store.mode() === 'light' ? 'dark' : 'light',
      });
    },
  }))
);
