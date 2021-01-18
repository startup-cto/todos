import React, { FormEvent, FunctionComponent, useState } from "react";
import { en } from "../../locale";
import { Button, ButtonColor, ButtonType } from "../shared";

export interface Props {
  onAdd: (description: string) => void;
}

export const AddTodo: FunctionComponent<Props> = ({ onAdd }) => {
  const [todoText, setTodoText] = useState("");

  function onSubmit(event: FormEvent) {
    event.preventDefault();
    onAdd(todoText);
  }

  const todoInputId = "todoInput";
  return (
    <form
      onSubmit={onSubmit}
      style={{
        display: "grid",
        gridTemplateColumns: "max-content auto max-content",
        gap: "1rem",
      }}
    >
      <label htmlFor={todoInputId} style={{ marginRight: "0.5rem" }}>
        {en.newTodo}
      </label>
      <input
        id={todoInputId}
        onChange={(event) => setTodoText(event.target.value)}
        style={{ width: "100%" }}
        value={todoText}
        type="text"
      />
      <Button color={ButtonColor.Success} type={ButtonType.Submit}>
        {en.addTodo}
      </Button>
    </form>
  );
};
