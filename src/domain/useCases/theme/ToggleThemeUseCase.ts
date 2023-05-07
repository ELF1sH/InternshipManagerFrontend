import { IThemeRepository } from 'domain/repositories/other/interfaces/IThemeRepository';

import { ThemeStore } from 'storesMobx/stores/ThemeStore';

export class ToggleThemeUseCase {
  public constructor(
    private _themeStore: ThemeStore,
    private _themeRepository: IThemeRepository,
  ) { }

  public toggleTheme() {
    this._themeStore.toggleTheme();

    this._themeRepository.toggleTheme();
  }
}
