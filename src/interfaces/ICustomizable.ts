import type { IColumn } from "./Generic/IColumns";

export interface ICustomizable<T> {
  columns: IColumn<T>[];
}
