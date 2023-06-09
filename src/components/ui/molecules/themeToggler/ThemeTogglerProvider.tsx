import React from 'react';

import ThemeTogglerController from 'components/ui/molecules/themeToggler/ThemeTogglerController';
import { ThemeTogglerViewModel } from 'components/ui/molecules/themeToggler/ThemeTogglerViewModel';

import { ToggleThemeUseCase } from 'domain/useCases/theme/ToggleThemeUseCase';
import { themeRepository } from 'domain/repositories/other/ThemeRepository';
import { GetThemeUseCase } from 'domain/useCases/theme/GetThemeUseCase';

import { useStore } from 'storesMobx/MobxStoreProvider';

interface ThemeTogglerProviderProps {
  isSwitch?: boolean;
  className?: string;
}

const ThemeTogglerProvider: React.FC<ThemeTogglerProviderProps> = ({
  isSwitch,
  className,
}) => {
  const { themeStore } = useStore();

  const toggleThemeUseCase = new ToggleThemeUseCase(themeStore, themeRepository);
  const getThemeUseCase = new GetThemeUseCase(themeStore);

  const themeTogglerViewModel = new ThemeTogglerViewModel(toggleThemeUseCase, getThemeUseCase);

  return (
    <ThemeTogglerController
      viewModel={themeTogglerViewModel}
      isSwitch={isSwitch}
      className={className}
    />
  );
};

export default ThemeTogglerProvider;
