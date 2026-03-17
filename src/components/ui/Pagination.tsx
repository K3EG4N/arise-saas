import { ChevronLeft } from "@/icons/Regular/ChevronLeft";
import { ChevronRight } from "@/icons/Regular/ChevronRight";
import { ComboBox } from "./ComboBox";
import type { IComboBoxOption } from "@/interfaces/IComboBox";
import type { IPagination } from "@/interfaces/IPagination";

export const Pagination = ({ setting }: IPagination) => {
  if (!setting) return null;

  const { currentPage, totalItems, totalPages, pageSize } = setting;

  const startRow = (currentPage - 1) * pageSize + 1;
  const endRow = Math.min(currentPage * pageSize, totalItems);

  const pages = Array.from({ length: totalPages }, (_, i) => i + 1);

  const pageSizeOptions: IComboBoxOption[] = [
    { label: "10", value: "10" },
    { label: "25", value: "25" },
    { label: "50", value: "50" },
  ];

  return (
    <div className="grid w-full grid-cols-[1fr_auto_1fr] items-center p-1.5 text-sm">
      <span>
        Showing {startRow} to {endRow} of {totalItems} entries
      </span>

      <div className="flex items-center gap-3">
        <ChevronLeft />
        <div className="font-outfit flex items-center gap-1 text-[15px]">
          {pages.map((it) => (
            <span
              key={it}
              className={`cursor-pointer rounded-md px-4 py-2 ${
                it === currentPage
                  ? "bg-teal-500/20 font-medium text-teal-700"
                  : "hover:bg-gray-200"
              }`}
            >
              {it}
            </span>
          ))}
        </div>
        <ChevronRight />
      </div>

      <div className="flex items-center gap-2 justify-self-end">
        <span className="text-sm text-stone-700">Rows per page:</span>
        <div className="w-15">
          <ComboBox options={pageSizeOptions} defaultValue="50" />
        </div>
      </div>
    </div>
  );
};
