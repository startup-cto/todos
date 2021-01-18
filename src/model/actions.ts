import { Todo } from "./Todo";

export enum TodoActionType {
  AddTodo = "AddTodo",
  CompleteTodo = "CompleteTodo",
  DeleteTodo = "DeleteTodo",
}

export function createAddTodoAction(description: string) {
  const newTodo = new Todo(description);
  return {
    type: TodoActionType.AddTodo as const,
    payload: newTodo,
  };
}

type AddTodoAction = ReturnType<typeof createAddTodoAction>;

export function createCompleteTodoAction(id: Todo["id"]) {
  return {
    type: TodoActionType.CompleteTodo as const,
    payload: {
      id,
    },
  };
}

type CompleteTodoAction = ReturnType<typeof createCompleteTodoAction>;

export function createDeleteTodoAction(id: Todo["id"]) {
  return {
    type: TodoActionType.DeleteTodo as const,
    payload: {
      id,
    },
  };
}

type DeleteTodoAction = ReturnType<typeof createDeleteTodoAction>;
export type TodoAction = AddTodoAction | CompleteTodoAction | DeleteTodoAction;
