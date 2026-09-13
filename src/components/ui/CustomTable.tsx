import type { ICustomTable } from "@/interfaces/ui/ICustomTable";
import { Button, Flex } from "antd";
import { CustomSearch } from "./CustomSearch";
import { DataTable } from "./DataTable";
import { PaginationFooter } from "./PaginationFooter";

export const CustomTable = <T,>({
  data,
  columns,
  loading,
  buttons,
  enableSearch,
  //   filters,
  pagination,
  onPaginationChange,
  meta,
  rowKey,
}: ICustomTable<T>) => {
  const PAGE_SIZE_OPTIONS = [10, 50, 100];

  const handlePageChange = (page: number, pageSize?: number) => {
    onPaginationChange?.((prev) => ({
      ...prev,
      page: (page - 1) * (pageSize ?? prev.pageSize),
      pageSize: pageSize ?? prev.pageSize,
    }));
  };

  const handleShowSizeChange = (_: number, pageSize: number) => {
    onPaginationChange?.((prev) => ({ ...prev, page: 0, pageSize: pageSize }));
  };

  const handleSearch = (v?: string) => {
    onPaginationChange?.((prev) => ({ ...prev, page: 0, search: v ?? "" }));
  };

  //   const handleFilter = (values: FilterValues) => {
  //     onPaginationChange?.((prev) => ({ ...prev, page: 0, ...values }));
  //   };

  const tablePagination = {
    current: meta?.page ?? 1,
    pageSize: meta?.pageSize ?? pagination?.pageSize ?? 10,
    total: meta?.total ?? 0,
  };

  return (
    <Flex vertical gap={8} className="h-full min-h-0 w-full">
      <Flex justify="space-between" className="shrink-0">
        <Flex gap={8}>
          {buttons?.map((button, index) => (
            <Button
              key={index}
              type={button.type}
              icon={button.icon}
              onClick={button.onClick}
            >
              {button.label}
            </Button>
          ))}
        </Flex>
        <Flex gap={8} align="center">
          {enableSearch && <CustomSearch onSearch={handleSearch} />}
          {/* {filters && filters.length > 0 && (
            <TableFilter filters={filters} onApply={handleFilter} />
          )} */}
        </Flex>
      </Flex>

      <div className="mt-1.5 flex min-h-0 flex-1 flex-col overflow-hidden rounded-lg border border-stone-200 bg-white">
        <DataTable
          data={data ?? []}
          columns={columns}
          loading={loading}
          rowKey={rowKey}
        />

        <PaginationFooter
          pagination={tablePagination}
          shownCount={meta?.count ?? 0}
          pageSizeOptions={PAGE_SIZE_OPTIONS}
          onChange={handlePageChange}
          onShowSizeChange={handleShowSizeChange}
        />
      </div>
    </Flex>
  );
};
