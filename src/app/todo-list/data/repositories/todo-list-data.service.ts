import { Injectable } from '@angular/core';
import { TodoItemsRepository } from '../../domain/repositories/todo-items-repository';
import { BehaviorSubject, Observable, map, of } from 'rxjs';
import { TodoItem } from '../../domain/entities/todo-item.model';
import { TodoListData } from '../models/todo-list-data.model';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TodoListDataService extends TodoItemsRepository {
  private readonly todoItems$ = new BehaviorSubject<TodoItem[]>([]);

  constructor(private readonly httpClient: HttpClient) {
    super();
    this.initData();
  }

  private initData() {
    this.httpClient
      .get<TodoListData>('assets/mock-data.json')
      .pipe(map((data) => TodoListData.transform(data.items || [])))
      .subscribe((data) => this.todoItems$.next(data));
  }

  override addItem$(todoItem: TodoItem): Observable<TodoItem[]> {
    this.todoItems$.next([...this.todoItems$.value, todoItem]);

    return this.todoItems$;
  }

  override getItems$(): Observable<TodoItem[]> {
    return this.todoItems$;
  }

  override removeItem$(id: string): Observable<TodoItem | null> {
    const todoItem = this.todoItems$.value.find((items) => items.id === id);

    if (!todoItem) {
      return of(null);
    }

    this.todoItems$.next(
      this.todoItems$.value.filter(({ id }) => todoItem.id !== id)
    );

    return of(todoItem);
  }
}
