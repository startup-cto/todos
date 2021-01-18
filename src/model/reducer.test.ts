import { todosReducer } from "./reducer";
import { TodoMock } from "./TodoMock";
import {
  createAddTodoAction,
  createCompleteTodoAction,
  createDeleteTodoAction,
} from "./actions";

describe("todo reducer", () => {
  describe("addTodoAction", () => {
    it("adds a new todo to the list", () => {
      const description = "This is a todo";
      expect(todosReducer([], createAddTodoAction(description))).toContainEqual(
        expect.objectContaining({ description })
      );
    });

    it("does not remove an existing todo", () => {
      const existingTodo = new TodoMock();
      expect(
        todosReducer([existingTodo], createAddTodoAction("This is a todo"))
      ).toContainEqual(existingTodo);
    });
  });

  describe("completeTodoAction", () => {
    it("marks a todo as completed", () => {
      const incompleteTodo = new TodoMock({ completed: false });
      expect(
        todosReducer(
          [incompleteTodo],
          createCompleteTodoAction(incompleteTodo.id)
        )
      ).toContainEqual(
        expect.objectContaining({ id: incompleteTodo.id, completed: true })
      );
    });
  });

  describe("deleteTodoAction", () => {
    it("removes the given todo", () => {
      const existingTodo = new TodoMock();
      expect(
        todosReducer([existingTodo], createDeleteTodoAction(existingTodo.id))
      ).toEqual([]);
    });

    it("does not remove a todo with a different id", () => {
      const existingTodo = new TodoMock({ id: "existingId" });
      expect(
        todosReducer([existingTodo], createDeleteTodoAction("differentId"))
      ).toEqual([existingTodo]);
    });
  });
});
