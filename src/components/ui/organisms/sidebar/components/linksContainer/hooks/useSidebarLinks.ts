import { SidebarLink } from 'components/ui/organisms/sidebar/components/linksContainer/types/typest';
import ClassesIcon from 'components/ui/atoms/icons/ClassesIcon';
import BugIcon from 'components/ui/atoms/icons/BugIcon';
import InfoIcon from 'components/ui/atoms/icons/InfoIcon';

import { UserRole } from 'modules/authority/enums/UserRole';

import { useStore } from 'storesMobx/MobxStoreProvider';

import { route } from 'utils/constants/route';

const links: Record<UserRole, SidebarLink[]> = {
  [UserRole.STUDENT]: [
    {
      text: 'Профиль',
      to: route.profile,
      icon: ClassesIcon,
    },
    {
      text: 'Вакансии',
      to: route.vacancies,
      icon: ClassesIcon,
    },
    {
      text: 'Получение стажировки',
      to: route.internship,
      icon: ClassesIcon,
    },
    {
      text: 'Список предпочтений',
      to: route.preferences,
      icon: ClassesIcon,
    },
    {
      text: 'Шаблоны дневников практик',
      to: route.templates,
      icon: ClassesIcon,
    },
    {
      text: 'Студенты',
      to: route.students,
      icon: ClassesIcon,
    },
  ],
  [UserRole.COMPANY]: [],
  [UserRole.UNIVERSITY_DEPARTMENT]: [],
};

export const useSidebarLinks = () => {
  const { role } = useStore().userStore;

  return [
    ...links[role as UserRole],
    {
      text: 'Сообщить об ошибке',
      to: route.reportBug,
      icon: BugIcon,
    },
    {
      text: 'О нас',
      to: route.about,
      icon: InfoIcon,
    },
  ];
};
