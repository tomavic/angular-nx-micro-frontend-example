import { Component, inject } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'org-full-stack-todo-feature-dashboard',

  templateUrl: './feature-dashboard.component.html',
  styleUrls: ['./feature-dashboard.component.scss'],
})
export class FeatureDashboardComponent {
  private readonly apiService = inject(ApiService);

  todoItems$ = this.apiService.getAllToDoItems();
}
