import { en } from "../../locale";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSmileBeam } from "@fortawesome/free-solid-svg-icons";

export function NoTodos() {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <FontAwesomeIcon icon={faSmileBeam} size="2x" />
      <p>{en.noTodos}</p>
    </div>
  );
}
