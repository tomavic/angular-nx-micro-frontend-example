import { Route } from '@angular/router';
import { NotFoundComponent } from './not-found.component';

export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'dashboard' },
  {
    path: 'login',
    loadChildren: () => import('login/Module').then((m) => m.LoginModule),
  },
  {
    path: 'dashboard',
    loadChildren: () =>
      import('@org/libs/todo/dashboard').then((m) => m.FeatureDashboardModule),
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];
