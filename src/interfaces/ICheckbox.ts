export interface ICheckbox {
  active?: boolean | "maybe";
  onCheck?: (value: boolean | "maybe") => void;
  onClick?: () => void;
}
