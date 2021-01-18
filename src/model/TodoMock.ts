import { Todo } from "./Todo";
import { v4 as uuid } from "uuid";

export class TodoMock implements Todo {
  completed = false;
  description = "This is a todo";
  id = uuid();

  constructor(overrides: Partial<Todo> = {}) {
    Object.assign(this, overrides);
  }
}
