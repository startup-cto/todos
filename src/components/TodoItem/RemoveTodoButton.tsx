import { Button, ButtonColor } from "../shared/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { en } from "../../locale";
import React from "react";

export interface Props {
  onClick: () => void;
}

export function RemoveTodoButton(props: Props) {
  return (
    <Button color={ButtonColor.Alert} onClick={props.onClick}>
      <FontAwesomeIcon icon={faTrash} onClick={props.onClick} /> {en.removeTodo}
    </Button>
  );
}
