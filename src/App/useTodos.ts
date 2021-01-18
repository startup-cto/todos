import { Todo } from "../model/Todo";
import { useReducer } from "react";
import { todosReducer } from "../model/reducer";
import {
  createAddTodoAction,
  createCompleteTodoAction,
  createDeleteTodoAction,
} from "../model/actions";

export function useTodos(initialTodos: Todo[]) {
  const [todos, dispatch] = useReducer(todosReducer, initialTodos);
  return {
    todos,
    addTodo: (description: string) =>
      dispatch(createAddTodoAction(description)),
    completeTodo: (id: Todo["id"]) => dispatch(createCompleteTodoAction(id)),
    deleteTodo: (id: Todo["id"]) => dispatch(createDeleteTodoAction(id)),
  };
}
