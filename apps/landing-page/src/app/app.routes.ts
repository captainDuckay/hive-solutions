import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: 'about-me',
    loadComponent: () =>
      import('@hive-solution/landing-page-feature-about-me').then(
        (m) => m.PageComponent
      ),
  },
  {
    path: '',
    loadComponent: () =>
      import('@hive-solution/landing-page-feature-home').then(
        (m) => m.PageComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('@hive-solution/landing-page-feature-404').then(
        (m) => m.PageComponent
      ),
  },
];
