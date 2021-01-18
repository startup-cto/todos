import React, { FunctionComponent, ReactNode } from "react";

export enum ButtonColor {
  Alert = "Alert",
  Success = "Success",
}

export enum ButtonType {
  Submit = "submit",
  Reset = "reset",
  Button = "button",
}

export interface Props {
  children: ReactNode;
  color: ButtonColor;
  onClick?: () => void;
  type?: ButtonType;
}

export const Button: FunctionComponent<Props> = ({
  children,
  color,
  onClick,
  type,
}) => {
  const colorStyles = {
    [ButtonColor.Alert]: {
      border: "#b33 solid 1px",
      borderRadius: "4px",
      boxShadow: "2px 2px 2px rgba(100,0,0,0.8)",
      color: "white",
      backgroundColor: "#a00",
    },
    [ButtonColor.Success]: {
      border: "#3b3 solid 1px",
      borderRadius: "4px",
      boxShadow: "2px 2px 2px rgba(0,100,0,0.8)",
      color: "white",
      backgroundColor: "#0a0",
    },
  };
  return (
    <button
      style={{
        ...colorStyles[color],
        padding: "0.2rem 0.5rem",
      }}
      onClick={onClick}
      type={type}
    >
      {children}
    </button>
  );
};
