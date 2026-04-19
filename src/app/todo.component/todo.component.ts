import { Component, inject } from '@angular/core';
import { TodoService } from '../todo.service';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-todo.component',
  imports: [AsyncPipe],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css',
})
export class TodoComponent {
  page = 1;
  pageSize = 4;

  private todoService = inject(TodoService);
  todos$ = this.todoService.getTodos();
}
