import { UserRole } from 'modules/authority/enums/UserRole';

import { AppRoute, route } from 'utils/constants/route';

const basicPaths: AppRoute[] = [route.base, route.settings, route.reportBug, route.about];

export const pathAccess: Record<UserRole, AppRoute[]> = {
  [UserRole.STUDENT]: [
    ...basicPaths,
    route.profile,
    route.vacancies,
    route.gettingInternship,
    route.preferences,
    route.templates,
  ],
  [UserRole.COMPANY]: [
    ...basicPaths,
    route.vacancies,
    route.students,
  ],
  [UserRole.UNIVERSITY_DEPARTMENT]: [
    ...basicPaths,
    route.vacancies,
    route.students,
    route.templates,
    route.profile,
  ],
};
