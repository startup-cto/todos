import React, { FunctionComponent } from "react";
import { Todo } from "../../model/Todo";
import { TodoItem } from "../TodoItem";
import { NoTodos } from "./NoTodos";

export interface Props {
  todos: Todo[];
  onCompleteTodo: (id: Todo["id"]) => void;
  onDeleteTodo: (id: Todo["id"]) => void;
}

export const TodoList: FunctionComponent<Props> = ({
  todos,
  onCompleteTodo,
  onDeleteTodo,
}) => {
  if (todos.length === 0) {
    return <NoTodos />;
  }
  return (
    <ul style={{ padding: 0 }}>
      {todos.map((todo) => (
        <TodoItem
          key={todo.id}
          todo={todo}
          onRemove={() => onDeleteTodo(todo.id)}
          onComplete={() => onCompleteTodo(todo.id)}
        />
      ))}
    </ul>
  );
};
