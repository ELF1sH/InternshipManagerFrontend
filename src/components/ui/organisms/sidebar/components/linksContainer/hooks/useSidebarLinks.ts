import { useLocation } from 'react-router-dom';

import ClassesIcon from 'components/ui/atoms/icons/ClassesIcon';
import BugIcon from 'components/ui/atoms/icons/BugIcon';
import InfoIcon from 'components/ui/atoms/icons/InfoIcon';

import { route } from 'utils/constants/route';

export const useSidebarLinks = () => {
  const { pathname } = useLocation();
  const curSubDirectory = `/${pathname.split('/')[1]}`;

  return [
    {
      text: 'Vacancies',
      to: route.vacancies,
      isActive: route.vacancies === curSubDirectory,
      icon: ClassesIcon,
    },
    {
      text: 'Report a bug',
      to: route.reportBug,
      isActive: route.reportBug === curSubDirectory,
      icon: BugIcon,
    },
    {
      text: 'About us',
      to: route.about,
      isActive: route.about === curSubDirectory,
      icon: InfoIcon,
    },
  ];
};
