import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Observable } from 'rxjs';
import { TodoListService } from '../../services/todo-list.service';
import { TodoItem } from '../../../domain/entities/todo-item.model';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrl: './todo-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoListComponent {
  readonly items$: Observable<TodoItem[]> = this.getItems$();

  constructor(private readonly todoListService: TodoListService) {}

  private getItems$(): Observable<TodoItem[]> {
    return this.todoListService.getItems$();
  }

  onAddClick() {
    const randomStr = String(Math.random() * 100);

    this.todoListService.addItem$(randomStr, randomStr);
  }

  onItemClick(id: string) {
    this.todoListService.removeItem$(id);
  }
}
