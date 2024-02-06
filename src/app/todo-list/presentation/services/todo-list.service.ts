import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoItem } from '../../domain/entities/todo-item.model';
import { TodoItemsRepository } from '../../domain/repositories/todo-items-repository';
import { GetItems } from '../../domain/use-cases/get-items';
import { RemoveItem } from '../../domain/use-cases/remove-item';
import { AddItem } from '../../domain/use-cases/add-item';

@Injectable()
export class TodoListService {
  private getItemsCase: GetItems;
  private removeItemCase: RemoveItem;
  private addItemCase: AddItem;

  constructor(todoItemsRepository: TodoItemsRepository) {
    this.getItemsCase = new GetItems(todoItemsRepository);
    this.removeItemCase = new RemoveItem(todoItemsRepository);
    this.addItemCase = new AddItem(todoItemsRepository);
  }

  getItems$(): Observable<TodoItem[]> {
    return this.getItemsCase.getItems$();
  }

  removeItem$(id: string): Observable<TodoItem | null> {
    return this.removeItemCase.removeItem$(id);
  }

  addItem$(id: string, description: string): Observable<TodoItem[]> {
    return this.addItemCase.addItem$(id, description);
  }
}
