import type { IColumn } from "./Generic/IColumns";
import type { IPaginationSettings } from "./IPagination";

export interface ITable<T> {
  data: T[];
  columns: IColumn<T>[];
  multiSelect?: boolean;
  customizable?: boolean;
  pagination?: IPaginationSettings;
  isLoading?: boolean;
  hasSearch?: boolean;
  onSelect?: (values: unknown) => void;
  buttons?: ITableButtons;
}

export interface ITableButtons {
  left?: ITableButton[];
  right?: ITableButton[];
}

export type WithSelected<T> = T & { selected: boolean };

interface ITableButton {
  label: string;
  icon: React.ReactNode;
  onClick?: () => void;
}
