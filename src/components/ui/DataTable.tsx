import { Spin } from "antd";
import type { ReactNode } from "react";

export interface DataTableColumn<T> {
  title: ReactNode;
  dataIndex?: keyof T | string;
  key?: string;
  className?: string;
  width?: number;
  align?: "left" | "center" | "right";
  render?: (value: unknown, record: T, index: number) => ReactNode;
}

interface DataTableProps<T> {
  data: T[];
  columns: DataTableColumn<T>[];
  loading?: boolean;
  rowKey: (record: T, index: number) => string | number;
  emptyText?: string;
}

const ALIGN_CLASS = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
} as const;

function getColumnClassName<T>(col: DataTableColumn<T>) {
  if (col.className) return col.className;
  if (col.width) return "";
  return "flex-1";
}

function getColumnStyle<T>(col: DataTableColumn<T>) {
  if (col.className) return undefined;
  if (col.width) return { width: col.width, flex: "0 0 auto" as const };
  return undefined;
}

export const DataTable = <T,>({
  data,
  columns,
  loading,
  rowKey,
  emptyText = "Sin registros",
}: DataTableProps<T>) => {
  return (
    <div className="relative flex min-h-0 flex-1 flex-col overflow-hidden">
      <div
        className="flex shrink-0 border-b overflow-y-hidden border-stone-200 bg-stone-50"
        style={{ scrollbarGutter: "stable" }}
      >
        {columns.map((col) => (
          <div
            key={col.key ?? String(col.dataIndex)}
            className={`shrink-0 truncate px-4 py-3.5 text-sm font-semibold text-stone-700 ${getColumnClassName(
              col,
            )} ${ALIGN_CLASS[col.align ?? "left"]}`}
            style={getColumnStyle(col)}
          >
            {col.title}
          </div>
        ))}
      </div>

      <div
        className="min-h-0 flex-1 overflow-y-auto"
        style={{ scrollbarGutter: "stable" }}
      >
        {data.length === 0 && !loading ? (
          <div className="flex h-full items-center justify-center text-sm text-stone-400">
            {emptyText}
          </div>
        ) : (
          data.map((record, rowIndex) => (
            <div
              key={rowKey(record, rowIndex)}
              className="flex border-b border-stone-100 transition-colors last:border-b-0 hover:bg-stone-100"
            >
              {columns.map((col) => {
                const key = col.key ?? String(col.dataIndex);
                const value = col.dataIndex
                  ? (record as Record<string, unknown>)[col.dataIndex as string]
                  : undefined;

                const content = col.render
                  ? col.render(value, record, rowIndex)
                  : (value as ReactNode);

                return (
                  <div
                    key={key}
                    className={`shrink-0 truncate px-4 py-3.5 text-sm text-stone-700 ${getColumnClassName(
                      col,
                    )} ${ALIGN_CLASS[col.align ?? "left"]}`}
                    style={getColumnStyle(col)}
                  >
                    {content}
                  </div>
                );
              })}
            </div>
          ))
        )}
      </div>

      {loading && (
        <div className="absolute inset-0 z-10 flex items-center justify-center bg-white/60">
          <Spin />
        </div>
      )}
    </div>
  );
};
