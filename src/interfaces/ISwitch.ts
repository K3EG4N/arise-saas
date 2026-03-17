export interface ISwitch {
  active?: boolean;
  onToggle?: (value: boolean) => void;
  onClick?: () => void;
}
