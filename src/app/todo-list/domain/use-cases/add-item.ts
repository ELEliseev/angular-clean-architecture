import { Observable } from 'rxjs';
import { TodoItem } from '../entities/todo-item.model';
import { TodoItemsRepository } from '../repositories/todo-items-repository';

export class AddItem {
  constructor(private readonly todoItemsRepository: TodoItemsRepository) {}

  addItem$(id: string, description: string): Observable<TodoItem[]> {
    const todoItem = new TodoItem(id, description);

    return this.todoItemsRepository.addItem$(todoItem);
  }
}
