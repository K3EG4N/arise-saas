import type { ITable } from "@/interfaces/ITable";
import { Checkbox } from "./Checkbox";
import { useEffect, useState } from "react";
import { Pagination } from "./Pagination";
import { Button } from "./Button";
import { Filter } from "@/icons/Regular/Filter";

export const Table = ({
  data,
  columns,
  onSelect,
  multiSelect,
  hasFilter,
}: ITable) => {
  const [rows, setRows] = useState<any[]>([]);

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

  return (
    <article className="mt-2 flex h-full flex-col overflow-hidden border-neutral-300">
      {hasFilter && (
        <div className="w-fit mb-2">
          <Button appareance="ghost" label="Filters" icon={<Filter />}/>
        </div>
      )}
      <header className="sticky top-0 z-10 flex shrink-0 border-y border-neutral-300 bg-white">
        {multiSelect && (
          <div className="flex items-center border-neutral-300 p-2">
            <Checkbox
              active={
                rows.every((row) => row.selected)
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
        {columns.map((column) => (
          <div
            className="flex-1 border-neutral-300 p-2 text-sm font-medium"
            key={column.id}
          >
            {column.name}
          </div>
        ))}
      </header>

      <section className="min-h-0 flex-1 divide-y divide-neutral-300 overflow-y-auto">
        {rows.map((row, index) => (
          <div key={index} className="flex">
            {multiSelect && (
              <div className="flex items-center justify-center border-neutral-300 p-2">
                <Checkbox
                  active={row.selected}
                  onCheck={(v) => {
                    const newRows = [...rows];
                    newRows[index].selected = v;
                    setRows(newRows);
                  }}
                />
              </div>
            )}
            {columns.map((column) => (
              <div className="flex-1 px-2 py-3 text-sm" key={column.id}>
                {String(row[column.field as keyof typeof row])}
              </div>
            ))}
          </div>
        ))}
      </section>

      <Pagination />
    </article>
  );
};
