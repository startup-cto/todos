import { v4 as uuid } from "uuid";

export class Todo {
  id = uuid();
  completed = false;

  constructor(public description: string) {}
}
