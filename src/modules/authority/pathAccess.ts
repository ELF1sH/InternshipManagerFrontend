import { UserRole } from 'modules/authority/enums/UserRole';

import { AppRoute, route } from 'utils/constants/route';

export const pathAccess: Record<UserRole, AppRoute[]> = {
  [UserRole.STUDENT]: [route.base, route.reportBug, route.about,
    route.profile, route.vacancies, route.internship, route.preferences,
    route.templates],
  [UserRole.COMPANY]: ['/', '/vacancies', '/report-bug', '/about', '/students'],
  [UserRole.UNIVERSITY_DEPARTMENT]: ['/', '/vacancies', '/report-bug', '/about', '/students', '/templates', '/profile'],
};
