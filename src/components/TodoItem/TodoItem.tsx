import { RemoveTodoButton } from "./RemoveTodoButton";
import { CompleteTodoButton } from "./CompleteTodoButton";
import React, { FunctionComponent } from "react";
import { en } from "../../locale";
import { screenReaderOnlyStyle } from "../shared/screenReaderOnlyStyle";
import { Todo } from "../../model/Todo";

export interface Props {
  todo: Todo;
  onComplete: (id: Todo["id"]) => void;
  onRemove: (id: Todo["id"]) => void;
}

export const TodoItem: FunctionComponent<Props> = ({
  todo: { id, completed, description },
  onComplete,
  onRemove,
}) => (
  <li
    style={{
      backgroundColor: "white",
      border: "solid 1px #eee",
      boxShadow: "2px 2px 4px rgba(0,0,0,0.3)",
      display: "grid",
      gap: "1rem",
      gridTemplateColumns: "auto max-content",
      padding: "0.5rem",
    }}
  >
    <span
      style={{
        ...(completed ? { textDecoration: "line-through" } : {}),
        overflow: "hidden",
        textOverflow: "ellipsis",
        whiteSpace: "nowrap",
      }}
    >
      {completed && (
        <span style={screenReaderOnlyStyle}>{en.todoCompleted}</span>
      )}
      {description}
    </span>
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        gap: "1rem",
      }}
    >
      <RemoveTodoButton onClick={() => onRemove(id)} />
      {!completed && <CompleteTodoButton onClick={() => onComplete(id)} />}
    </div>
  </li>
);
