import { Observable } from 'rxjs';
import { TodoItem } from '../entities/todo-item.model';

export abstract class TodoItemsRepository {
  abstract getItems$(): Observable<TodoItem[]>;
  abstract removeItem$(id: string): Observable<TodoItem | null>;
  abstract addItem$(todoItem: TodoItem): Observable<TodoItem[]>;
}
