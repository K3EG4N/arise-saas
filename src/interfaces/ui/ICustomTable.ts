import type { SizeType } from "antd/es/config-provider/SizeContext";
import type { IPagination } from "../IPagination";
import type { DataTableColumn } from "@/components/ui/DataTable";

export interface ICustomTable<T> {
  data: T[];
  columns: DataTableColumn<T>[];
  loading?: boolean;
  size?: SizeType;
  buttons?: ITableButtons[];
  enableSearch?: boolean;
  //   filters?: FilterConfig[];
  //   onFilter?: (values: FilterValues) => void;
  pagination?: IPagination;
  onPaginationChange?: React.Dispatch<React.SetStateAction<IPagination>>;
  meta?: { page?: number; pageSize?: number; count?: number; total?: number };
  rowKey: (record: T, index: number) => string | number;
}

export interface ITableButtons {
  type?: "link" | "text" | "default" | "primary" | "dashed" | undefined;
  icon?: React.ReactNode;
  onClick: () => void;
  label?: string;
}
