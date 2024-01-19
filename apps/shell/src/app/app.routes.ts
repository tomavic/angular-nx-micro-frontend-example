import { Route } from '@angular/router';
import { NotFoundComponent } from './not-found.component';

export const appRoutes: Route[] = [
  { path: '', pathMatch: 'full', redirectTo: 'login' },
  {
    path: 'login',
    loadChildren: () => import('login/Module').then((m) => m.LoginModule),
  },

  {
    path: '**',
    component: NotFoundComponent,
  },
];
