export interface IInput {
  placeholder?: string;
  title?: string;
  field?: string;
  type?: "text" | "password" | "number";
  status?: "error" | "success" | "default";
  onChange?: (value: string) => void;
}
