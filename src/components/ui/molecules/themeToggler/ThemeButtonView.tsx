import React from 'react';

import moonIcon from 'assets/switchIcons/moonIcon.png';
import sunIcon from 'assets/switchIcons/sunIcon.png';

import { IconButton } from 'components/ui/atoms/iconButton/IconButton';
import { ThemeTogglerViewProps } from 'components/ui/molecules/themeToggler/ThemeTogglerView';

const ThemeButtonView: React.FC<ThemeTogglerViewProps> = ({
  isDarkMode,
  onClickThemeToggle,
  className,
}) => (
  <IconButton
    size="large"
    onClick={onClickThemeToggle}
    icon={<img alt="" src={isDarkMode ? moonIcon : sunIcon} width="25px" />}
    className={className}
  />
);

export default ThemeButtonView;
