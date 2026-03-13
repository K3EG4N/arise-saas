import type { IColumn } from "./Generic/IColumns";

export interface ITable {
  data: any[];
  columns: IColumn[];
  width?: string;
  multiSelect?: boolean;
  hasFilter?: boolean;
  onSelect?: (values: unknown) => void;
}
