import { UserRole } from 'modules/authority/enums/UserRole';

import { AppRoute } from 'utils/constants/route';

export const pathAccess: Record<UserRole, AppRoute[]> = {
  [UserRole.STUDENT]: ['/', '/vacancies', '/report-bug', '/about'],
  [UserRole.COMPANY]: ['/', '/vacancies', '/report-bug', '/about'],
  [UserRole.UNIVERSITY_DEPARTMENT]: ['/', '/vacancies', '/report-bug', '/about'],
};
