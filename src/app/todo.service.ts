import { Injectable } from '@angular/core';
import { Todo } from './todo.model';

@Injectable({
  providedIn: 'root',
})
export class TodoService {
  private todos: Todo[] = [];
  private selectedTodos: Todo[] = [];

  constructor() {}

  // Create a new todo
  addTodo(todoText: string): void {
    const newTodo: Todo = {
      id: this.generateUniqueId(), // You can use a more robust method to generate IDs
      text: todoText,
      completed: false,
    };
    this.todos.push(newTodo);
  }

  // Read all todos
  getTodos(): Todo[] {
    return this.todos;
  }
  
  getSelectedTodos(): Todo[] {
    return this.selectedTodos;
  }

  // Update a todo
  updateTodo(id: number, updatedText: string): void {
    const todoToUpdate = this.todos.find((todo) => todo.id === id);
    if (todoToUpdate) {
      todoToUpdate.text = updatedText;
    }
  }

  // Delete a todo
  deleteTodo(id: number): void {
    const index = this.todos.findIndex((todo) => todo.id === id);
    if (index !== -1) {
      this.todos.splice(index, 1);
    }
  }

  updateTodoStatus(id: number): void {
    const todoToUpdate = this.todos.find((todo) => todo.id === id);
    if (todoToUpdate) {
      todoToUpdate.completed = !todoToUpdate.completed; // Toggle completion status
      this.selectedTodos = this.todos.filter((todo) => todo.completed);
    }
  }


  // Generate a unique ID for a new todo (You can replace this with a more robust method)
  private generateUniqueId(): number {
    return this.todos.length > 0 ? Math.max(...this.todos.map((todo) => todo.id)) + 1 : 1;
  }
}
