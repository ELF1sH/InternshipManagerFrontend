export type AppRoute = '/' | '/vacancies' | '/report-bug' | '/about';

export const route: Record<string, AppRoute> = {
  base: '/',
  vacancies: '/vacancies',
  reportBug: '/report-bug',
  about: '/about',
};
