import { Component } from '@angular/core';
import { Todo } from '../todo.model';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {

  // selectedTodos: Todo[] = [];
  todos: Todo[];
  newTodoText: any;

  constructor(private todoService: TodoService) {
    this.todos = this.todoService.getTodos();
  }

  deleteTodo(id: number): void {
    this.todoService.deleteTodo(id);
  }

  addTodo(text: string): void {
    this.todoService.addTodo(text);
    this.newTodoText = '';
  }

  updateupdateTodoStatus(id: number) {
    this.todoService.updateTodoStatus(id);
  }


  // Multi delete 
  deleteSelectedTodos(): void {
    for (const selectedTodo of this.todoService.getSelectedTodos()) {
      this.todoService.deleteTodo(selectedTodo.id);
    }
    // Clear the selectedTodos array after deletion
  }

}
