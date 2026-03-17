import type { JSX } from "react";

export interface IInput {
  placeholder?: string;
  title?: string;
  type?: "text" | "password" | "number";
  onChange?: (value: string) => void;
  field?: string;
  rightText?: string;
  icon?: JSX.Element | React.ReactNode;
  iconPosition?: "left" | "right";
  status?: "error" | "success" | "default";
}
