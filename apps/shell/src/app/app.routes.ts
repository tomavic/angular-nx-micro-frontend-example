import { Route } from '@angular/router';
import { NotFoundComponent } from './not-found.component';

export const appRoutes: Route[] = [
  {
    path: '',
    loadChildren: () => import('login/Module').then((m) => m.LoginModule),
  },

  {
    path: '**',
    component: NotFoundComponent,
  },
];
