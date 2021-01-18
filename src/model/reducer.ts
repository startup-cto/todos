import { Todo } from "./Todo";
import { TodoAction, TodoActionType } from "./actions";

export function todosReducer(todos: Todo[], action: TodoAction) {
  switch (action.type) {
    case TodoActionType.AddTodo:
      return [...todos, action.payload];
    case TodoActionType.CompleteTodo:
      return todos.map((todo) =>
        todo.id === action.payload.id ? { ...todo, completed: true } : todo
      );
    case TodoActionType.DeleteTodo:
      return todos.filter((todo) => todo.id !== action.payload.id);
  }
}
