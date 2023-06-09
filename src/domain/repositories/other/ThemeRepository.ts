import { IThemeRepository } from 'domain/repositories/other/interfaces/IThemeRepository';
import { BaseLocalStorageRepository } from 'domain/repositories/other/BaseLocalStorageRepository';

export class ThemeRepository extends BaseLocalStorageRepository implements IThemeRepository {
  private readonly key: string = 'isDarkMode';

  public isDarkMode() {
    return this.get(this.key) === 'true';
  }

  private setIsDarkMode(value: boolean) {
    this.set(this.key, value.toString());
  }

  public toggleTheme() {
    const isDarkMode = this.isDarkMode();

    this.setIsDarkMode(!isDarkMode);
  }
}

export const themeRepository = new ThemeRepository();
