import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {
  ICreateTodo,
  ITodo,
  IUpdateTodo,
  IUpsertTodo,
} from '@org/shared/domain';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private readonly http = inject(HttpClient);
  private readonly baseURL = 'http://localhost:3000';

  getAllToDoItems(): Observable<ITodo[]> {
    return this.http.get<ITodo[]>(`${this.baseURL}/api/todos`);
  }

  getToDoById(todoId: string): Observable<ITodo> {
    return this.http.get<ITodo>(`${this.baseURL}/api/todos/${todoId}`);
  }

  createToDo(todoData: ICreateTodo): Observable<ITodo> {
    return this.http.post<ITodo>(`${this.baseURL}/api/todos`, todoData);
  }

  updateToDo(todoId: string, todoData: IUpdateTodo): Observable<ITodo> {
    return this.http.patch<ITodo>(
      `${this.baseURL}/api/todos/${todoId}`,
      todoData
    );
  }

  createOrUpdateToDo(todoId: string, todoData: IUpsertTodo): Observable<ITodo> {
    return this.http.put<ITodo>(
      `${this.baseURL}/api/todos/${todoId}`,
      todoData
    );
  }

  deleteToDo(todoId: string): Observable<never> {
    return this.http.delete<never>(`${this.baseURL}/api/todos/${todoId}`);
  }
}
