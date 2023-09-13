import { Component } from '@angular/core';
import { TodoService } from '../todo.service';


@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.css']
})
export class AddTodoComponent {
  constructor(private todoService: TodoService) {

  }
  addTodo(text: string) {
    this.todoService.addTodo(text);
  }
  newTodoText: any;

}
