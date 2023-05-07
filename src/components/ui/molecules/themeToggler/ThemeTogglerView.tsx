import React from 'react';

import sunIcon from 'assets/switchIcons/sunIcon.png';
import moonIcon from 'assets/switchIcons/moonIcon.png';

import SwitchFancy from 'components/ui/atoms/switchFancy/SwitchFancy';

export interface ThemeTogglerViewProps {
  isDarkMode: boolean;
  onClickThemeToggle: () => void;
  className?: string;
}

const ThemeTogglerView: React.FC<ThemeTogglerViewProps> = ({
  isDarkMode,
  onClickThemeToggle,
  className,
}) => (
  <SwitchFancy
    falseLabel="light"
    trueLabel="dark"
    falseIcon={sunIcon}
    trueIcon={moonIcon}
    isChecked={isDarkMode}
    className={className}
    setIsChecked={onClickThemeToggle}
  />
);

export default ThemeTogglerView;
