import type { JSX } from "react";

export interface IButton {
  label?: string;
  isLoading?: boolean;
  onClick?: () => void;
  appareance?: "primary" | "ghost";
  icon?: JSX.Element;
  iconPosition?: "left" | "right";
}
