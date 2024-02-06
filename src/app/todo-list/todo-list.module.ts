import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodoListComponent } from './presentation/components/todo-list/todo-list.component';
import { TodoItemComponent } from './presentation/components/todo-item/todo-item.component';
import { TodoListService } from './presentation/services/todo-list.service';
import { TodoItemsRepository } from './domain/repositories/todo-items-repository';
import { TodoListRoutingModule } from './todo-list.routing.module';
import { TodoListDataService } from './data/repositories/todo-list-data.service';

@NgModule({
  declarations: [TodoListComponent, TodoItemComponent],
  imports: [CommonModule, TodoListRoutingModule],
  providers: [
    { provide: TodoItemsRepository, useClass: TodoListDataService },
    TodoListService,
  ],
})
export class TodoListModule {}
