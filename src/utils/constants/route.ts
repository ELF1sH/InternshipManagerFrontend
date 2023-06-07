export type AppRoute = '/' | '/report-bug' | '/about'
  | '/profile' | '/vacancies' | '/internship' | '/preferences' | '/templates';

export const route: Record<string, AppRoute> = {
  base: '/',
  reportBug: '/report-bug',
  about: '/about',

  profile: '/profile',
  vacancies: '/vacancies',
  internship: '/internship',
  preferences: '/preferences',
  templates: '/templates',
};
