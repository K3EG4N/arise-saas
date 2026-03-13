import { ChevronLeft } from "@/icons/Regular/ChevronLeft";
import { ChevronRight } from "@/icons/Regular/ChevronRight";

export const Pagination = () => {
  const pages = [1, 2, 3, 4, 5];
  return (
    <div className="flex w-full items-center justify-between p-2 text-sm">
      <div>
        Rows per page:{" "}
        <select name="rowsPerPage" id="rowsPerPage">
          <option value="10">10</option>
          <option value="25">25</option>
          <option value="50">50</option>
        </select>
        <span className="ml-4">1-10 of 100</span>
      </div>
      <div className="flex items-center gap-3">
        <div>
          <ChevronLeft />
        </div>
        <div className="font-outfit flex items-center text-[15px] gap-1">
          {pages.map((it) => (
            <span
              className={`cursor-pointer rounded-md px-4 py-2 ${it === 1 ? "bg-teal-500/20 font-medium text-teal-700" : "hover:bg-gray-200"}`}
            >
              {it}
            </span>
          ))}
        </div>
        <div>
          <ChevronRight />
        </div>
      </div>
    </div>
  );
};
