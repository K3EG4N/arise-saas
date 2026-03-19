import { Checkbox } from "./Checkbox";
import { useEffect, useState } from "react";
import { Pagination } from "./Pagination";
import { Button } from "./Button";
import { Customizable } from "./Customizable";
import { Input } from "./Input";
import { Searcher } from "@/icons/Regular/Search";
import type { ITable, WithSelected } from "@/interfaces/ITable";

export const Table = <T,>({
  data,
  columns,
  onSelect,
  multiSelect,
  buttons,
  customizable,
  pagination,
  isLoading = false,
  hasSearch = false,
}: ITable<T>) => {
  const [rows, setRows] = useState<WithSelected<T>[]>([]);

  useEffect(() => {
    const newValues = data.map((row) => ({ ...row, selected: false }));
    setRows(newValues);
  }, [data]);

  useEffect(() => {
    if (onSelect) {
      onSelect(rows.filter((row) => row.selected));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [rows]);

  const toggleSelectAll = (value: boolean) => {
    const newRows = rows.map((row) => ({ ...row, selected: value }));
    setRows(newRows);
  };

  const getColumnStyle = (columnWidth?: string | number) => {
    if (columnWidth) {
      return {
        width: columnWidth,
        flex: "none",
      };
    }
    return { flex: "1 1 0%" };
  };

  const SKELETON_ROWS = 5;

  return (
    <article className="relative flex h-full flex-col overflow-hidden">
      {buttons && (
        <div className="my-1 flex shrink-0 items-center justify-between">
          <div className="flex gap-1">
            {buttons.left?.map((button, index) => (
              <Button
                key={`btn-left-${index}`}
                appareance="ghost"
                icon={button.icon}
                label={button.label}
                onClick={button.onClick}
              />
            ))}
          </div>
          <div className="flex w-fit items-center justify-end gap-1">
            {hasSearch && (
              <div className="w-62.5">
                <Input placeholder="Search" icon={<Searcher />} />
              </div>
            )}
            {customizable && <Customizable columns={columns} />}
            {buttons.right?.map((button, index) => (
              <div className="w-fit">
                <Button
                  key={`btn-right-${index}`}
                  appareance="ghost"
                  icon={button.icon}
                  label={button.label}
                  onClick={button.onClick}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="mb-2 flex min-h-0 flex-1 flex-col overflow-hidden rounded-md border border-neutral-200 bg-white">
        <div className="relative flex min-h-0 flex-1 flex-col">
          <header className="z-20 flex shrink-0 overflow-y-hidden border-b border-neutral-200 bg-slate-50 px-2 [scrollbar-gutter:stable]">
            {multiSelect && (
              <div className="flex w-10 shrink-0 items-center p-2">
                <Checkbox
                  active={
                    rows.length > 0 && rows.every((row) => row.selected)
                      ? true
                      : rows.some((row) => row.selected)
                        ? "maybe"
                        : false
                  }
                  onClick={() =>
                    toggleSelectAll(!rows.every((row) => row.selected))
                  }
                />
              </div>
            )}
            {columns.map((column, colIndex) => (
              <div
                className="min-w-0 truncate px-2 py-3 text-sm font-medium text-neutral-700"
                key={`header-col-${colIndex}`}
                style={getColumnStyle(column.width)}
              >
                {column.name}
              </div>
            ))}
          </header>

          <section className="grid min-h-0 flex-1 overflow-hidden bg-white">
            <div
              className={`col-start-1 row-start-1 divide-y divide-neutral-300 overflow-y-auto transition-opacity duration-300 ease-in-out [scrollbar-gutter:stable] ${
                isLoading
                  ? "z-10 opacity-100"
                  : "pointer-events-none z-0 opacity-0"
              }`}
            >
              {Array.from({ length: SKELETON_ROWS }).map((_, rowIndex) => (
                <div
                  key={`skeleton-row-${rowIndex}`}
                  className="flex border-neutral-200 px-2 last:border-b"
                >
                  {multiSelect && (
                    <div className="flex w-10 shrink-0 items-center p-2">
                      <div className="h-4 w-4 animate-pulse rounded bg-neutral-200" />
                    </div>
                  )}
                  {columns.map((column, colIndex) => (
                    <div
                      className="min-w-0 px-2 py-3"
                      key={`skeleton-row-${rowIndex}-col-${colIndex}`}
                      style={getColumnStyle(column.width)}
                    >
                      <div className="h-4 w-full animate-pulse rounded bg-neutral-200" />
                    </div>
                  ))}
                </div>
              ))}
            </div>

            <div
              className={`col-start-1 row-start-1 divide-y divide-neutral-300 overflow-y-auto transition-opacity duration-300 ease-in-out [scrollbar-gutter:stable] ${
                !isLoading
                  ? "z-10 opacity-100"
                  : "pointer-events-none z-0 opacity-0"
              }`}
            >
              {rows.map((row, rowIndex) => (
                <div
                  key={`row-${rowIndex}`}
                  className="flex items-center border-neutral-200 px-2 last:border-b hover:bg-neutral-50"
                >
                  {multiSelect && (
                    <div className="flex w-10 shrink-0 items-center p-2">
                      <Checkbox
                        active={row.selected}
                        onCheck={(v) => {
                          const newRows = [...rows];
                          newRows[rowIndex].selected = v as boolean;
                          setRows(newRows);
                        }}
                      />
                    </div>
                  )}
                  {columns.map((column, colIndex) => (
                    <div
                      className="min-w-0 px-2 py-3 text-sm text-neutral-800"
                      key={`row-${rowIndex}-col-${colIndex}`}
                      style={getColumnStyle(column.width)}
                    >
                      {column.onRender
                        ? column.onRender(row, rowIndex)
                        : String(row[column.field as keyof typeof row] ?? "")}
                    </div>
                  ))}
                </div>
              ))}

              {!isLoading && rows.length === 0 && (
                <div className="py-8 text-center text-sm text-neutral-500">
                  No se encontraron resultados.
                </div>
              )}
            </div>
          </section>

          {pagination && (
            <footer className="shrink-0 border-t border-neutral-200 bg-neutral-50 px-1">
              <Pagination setting={pagination} loading={isLoading} />
            </footer>
          )}
        </div>
      </div>
    </article>
  );
};
