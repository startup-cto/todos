import React, { FunctionComponent } from "react";
import { AddTodo } from "../components/AddTodo";
import { TodoList } from "../components/TodoList";
import { useTodos } from "./useTodos";

const TodoApp: FunctionComponent = () => {
  const { todos, addTodo, completeTodo, deleteTodo } = useTodos([]);

  return (
    <>
      <TodoList
        todos={todos}
        onCompleteTodo={completeTodo}
        onDeleteTodo={deleteTodo}
      />
      <AddTodo onAdd={addTodo} />
    </>
  );
};

export default TodoApp;
