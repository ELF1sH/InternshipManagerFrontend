export type AppRoute = '/' | '/report-bug' | '/about' | '/settings'
  | '/profile' | '/vacancies' | '/preferences' | '/templates' | '/students' | '/getting-internship';

export const route: Record<string, AppRoute> = {
  base: '/',
  settings: '/settings',
  reportBug: '/report-bug',
  about: '/about',

  profile: '/profile',
  vacancies: '/vacancies',
  preferences: '/preferences',
  templates: '/templates',
  students: '/students',
  gettingInternship: '/getting-internship',
};
