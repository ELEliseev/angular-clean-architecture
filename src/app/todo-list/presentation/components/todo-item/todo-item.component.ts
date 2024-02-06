import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  input,
} from '@angular/core';
import { TodoItem } from '../../../domain/entities/todo-item.model';

@Component({
  selector: 'li[app-todo-item]',
  templateUrl: './todo-item.component.html',
  styleUrl: './todo-item.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoItemComponent {
  @Output() itemClick = new EventEmitter<string>();

  readonly data = input.required<TodoItem>();
}
