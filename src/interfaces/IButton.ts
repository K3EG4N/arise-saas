import type { JSX } from "react";

export interface IButton {
  label?: string;
  isLoading?: boolean;
  onClick?: () => void;
  appareance?: "primary" | "ghost" | "outline";
  icon?: JSX.Element | React.ReactNode;
  iconPosition?: "left" | "right";
}
