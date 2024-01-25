import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { featureDashboardRoutes } from './lib.routes';
import { FeatureDashboardComponent } from './feature-dashboard.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(featureDashboardRoutes),
  ],
  declarations: [FeatureDashboardComponent],
})
export class FeatureDashboardModule {}
