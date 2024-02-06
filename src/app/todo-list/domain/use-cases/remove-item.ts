import { Observable } from 'rxjs';
import { TodoItem } from '../entities/todo-item.model';
import { TodoItemsRepository } from '../repositories/todo-items-repository';

export class RemoveItem {
  constructor(private readonly todoItemsRepository: TodoItemsRepository) {}

  removeItem$(id: string): Observable<TodoItem | null> {
    return this.todoItemsRepository.removeItem$(id);
  }
}
