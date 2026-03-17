export interface IColumn<T> {
  id: string | number;
  field: string;
  name: string;
  visible?: boolean;
  width?: string;
  onRender?: (item: T, index: number) => React.ReactNode;
}
