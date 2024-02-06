import { TodoItem } from '../../domain/entities/todo-item.model';

export interface TodoItemData {
  Id: string;
  Description: string;
  Unnecessary_Info: string;
}

export class TodoListData {
  items: TodoItemData[] | undefined;

  static transform(data: TodoItemData[]): TodoItem[] {
    return data.map(({ Id: id, Description: description }) => ({
      id,
      description,
    }));
  }
}
