import { Button, ButtonColor } from "../shared/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import { en } from "../../locale";
import React from "react";

export interface Props {
  onClick: () => void;
}

export function CompleteTodoButton(props: Props) {
  return (
    <Button color={ButtonColor.Success} onClick={props.onClick}>
      <FontAwesomeIcon icon={faCheck} onClick={props.onClick} />{" "}
      {en.markTodoAsCompleted}
    </Button>
  );
}
