import { useState, useEffect } from "react";
import { ChevronLeft } from "@/icons/Regular/ChevronLeft";
import { ChevronRight } from "@/icons/Regular/ChevronRight";
import { ComboBox } from "./ComboBox";
import { Skeleton } from "./Skeleton";
import type { IComboBoxOption } from "@/interfaces/IComboBox";
import type { IPagination } from "@/interfaces/IPagination";

export const Pagination = ({ setting, loading }: IPagination) => {
  const { currentPage, totalItems, totalPages, pageSize, filterSetter } =
    setting;

  const [activePage, setActivePage] = useState(currentPage);

  useEffect(() => {
    setActivePage(currentPage);
  }, [currentPage]);

  const startRow = totalItems === 0 ? 0 : (activePage - 1) * pageSize + 1;
  const endRow = Math.min(activePage * pageSize, totalItems);

  const isFirstPage = activePage <= 1;
  const isLastPage = activePage >= totalPages;

  const getVisiblePages = (
    current: number,
    total: number,
  ): (number | "...")[] => {
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
    if (current <= 4) return [1, 2, 3, 4, 5, "...", total];
    if (current >= total - 3)
      return [1, "...", total - 4, total - 3, total - 2, total - 1, total];
    return [1, "...", current - 1, current, current + 1, "...", total];
  };

  const visiblePages = getVisiblePages(
    activePage,
    totalPages === 0 ? 1 : totalPages,
  );

  const pageSizeOptions: IComboBoxOption[] = [
    { label: "10", value: "10" },
    { label: "25", value: "25" },
    { label: "50", value: "50" },
    { label: "100", value: "100" },
  ];

  const goToPage = (page: number) => {
    if (page === activePage) return;
    setActivePage(page);
    filterSetter((prev) => ({ ...prev, offset: (page - 1) * pageSize }));
  };

  const goToPrev = () => {
    if (isFirstPage) return;
    goToPage(activePage - 1);
  };

  const goToNext = () => {
    if (isLastPage) return;
    goToPage(activePage + 1);
  };

  return (
    <div
      className={`grid w-full grid-cols-[1fr_auto_1fr] items-center p-1.5 text-sm transition-opacity ${loading ? "pointer-events-none" : ""}`}
    >
      <span className="flex items-center gap-1">
        Showing {loading ? <Skeleton className="size-5" /> : startRow} to{" "}
        {loading ? <Skeleton className="size-5" /> : endRow} of{" "}
        {loading ? <Skeleton className="size-5" /> : totalItems} entries
      </span>

      <div className="flex items-center gap-3">
        <button
          onClick={goToPrev}
          disabled={isFirstPage || loading}
          className="rounded-md p-1 transition-colors hover:enabled:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ChevronLeft />
        </button>

        <div className="font-outfit flex items-center gap-1 text-[15px]">
          {loading
            ? Array.from({ length: 3 }, (_, index) => (
                <Skeleton key={index} className="size-9.25" />
              ))
            : visiblePages.map((it, index) =>
                it === "..." ? (
                  <span
                    key={`ellipsis-${index}`}
                    className="px-2 py-2 text-stone-400 select-none"
                  >
                    ...
                  </span>
                ) : (
                  <span
                    key={it}
                    onClick={() => goToPage(it)}
                    className={`cursor-pointer rounded-md px-4 py-2 transition-colors ${
                      it === activePage
                        ? "bg-teal-500/20 font-medium text-teal-700"
                        : "hover:bg-gray-200"
                    }`}
                  >
                    {it}
                  </span>
                ),
              )}
        </div>

        <button
          onClick={goToNext}
          disabled={isLastPage || loading}
          className="rounded-md p-1 transition-colors hover:enabled:bg-gray-200 disabled:cursor-not-allowed disabled:opacity-30"
        >
          <ChevronRight />
        </button>
      </div>

      <div className="flex items-center gap-2 justify-self-end">
        <span className="text-sm text-stone-700">Rows per page:</span>
        <div className="w-15">
          <ComboBox
            options={pageSizeOptions}
            defaultValue="50"
            onSelect={(v) => {
              setActivePage(1);
              filterSetter((prev) => ({
                ...prev,
                limit: parseInt(v),
                offset: 0,
              }));
            }}
          />
        </div>
      </div>
    </div>
  );
};
