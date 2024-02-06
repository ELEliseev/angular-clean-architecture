export interface TodoItemData {
  Id: string;
  Description: string;
  UnnecessaryInfo: string;
}

export interface Data {
  items: TodoItemData[];
}
