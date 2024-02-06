import { Observable } from 'rxjs';
import { TodoItem } from '../entities/todo-item.model';
import { TodoItemsRepository } from '../repositories/todo-items-repository';

export class GetItems {
  constructor(private readonly todoItemsRepository: TodoItemsRepository) {}

  getItems$(): Observable<TodoItem[]> {
    return this.todoItemsRepository.getItems$();
  }
}
