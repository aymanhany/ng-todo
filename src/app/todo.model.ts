export class Todo {
  id: number;
  text: string;
  completed: boolean;

  constructor(text: string) {
    this.id = 0; // Initialize with a default value
    this.text = text;
    this.completed = false;
  }
}
