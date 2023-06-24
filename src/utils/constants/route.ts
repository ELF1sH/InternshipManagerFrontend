export type AppRoute = '/' | '/report-bug' | '/about' | '/settings'
  | '/profile' | '/vacancies' | '/internship' | '/preferences' | '/templates' | '/students';

export const route: Record<string, AppRoute> = {
  base: '/',
  settings: '/settings',
  reportBug: '/report-bug',
  about: '/about',

  profile: '/profile',
  vacancies: '/vacancies',
  internship: '/internship',
  preferences: '/preferences',
  templates: '/templates',
  students: '/students',
};
