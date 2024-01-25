import { Route } from '@angular/router';
import { FeatureDashboardComponent } from './feature-dashboard.component';

export const featureDashboardRoutes: Route[] = [
  { path: '', pathMatch: 'full', component: FeatureDashboardComponent },
];
