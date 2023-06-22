import { UserRole } from 'modules/authority/enums/UserRole';

import { AppRoute, route } from 'utils/constants/route';

export const pathAccess: Record<UserRole, AppRoute[]> = {
  STUDENT: [route.base, route.reportBug, route.about,
    route.profile, route.vacancies, route.internship, route.preferences,
    route.templates],
  COMPANY: ['/', '/vacancies', '/report-bug', '/about', '/students'],
  DEAN: ['/', '/vacancies', '/report-bug', '/about', '/students', '/templates', '/profile'],
  UNVERIFIED_STUDENT: [],
  ADMIN: ['/', '/profile'],
};
