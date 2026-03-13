export interface IInput {
  placeholder?: string;
  title?: string;
  type?: "text" | "password" | "number";
  onChange?: (value: string) => void;
  field?: string;
  rightText?: string;
  status?: "error" | "success" | "default";
}
