import {
  createAddTodoAction,
  createCompleteTodoAction,
  createDeleteTodoAction,
} from "./actions";
import { Todo } from "./Todo";

describe("actions", () => {
  describe("createAddTodoAction", () => {
    it("creates an action with a todo as payload", () => {
      expect(createAddTodoAction("A description").payload).toBeInstanceOf(Todo);
    });
  });

  describe("createCompleteTodoAction", () => {
    it("creates an action with the given id in the payload", () => {
      const id = "id";
      expect(createCompleteTodoAction(id).payload.id).toEqual(id);
    });
  });

  describe("createDeleteTodoAction", () => {
    it("creates an action with the given id in the payload", () => {
      const id = "id";
      expect(createDeleteTodoAction(id).payload.id).toEqual(id);
    });
  });
});
