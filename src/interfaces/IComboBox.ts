export interface IComboBox {
  title?: string;
  options: IComboBoxOption[];
  placeholder?: string;
  showClear?: boolean;
  defaultValue?: string;
  onChange?: (value: string) => void;
  onSelect?: (value: string) => void;
}

export interface IComboBoxOption {
  label: string;
  value: string;
}
