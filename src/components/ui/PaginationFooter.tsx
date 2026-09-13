import { Flex, Pagination, Select } from "antd";

interface PaginationFooterProps {
  pagination: {
    current: number;
    pageSize: number;
    total: number;
  };
  shownCount: number;
  pageSizeOptions: number[];
  onChange: (page: number, pageSize: number) => void;
  onShowSizeChange: (current: number, size: number) => void;
}

export const PaginationFooter = ({
  pagination,
  shownCount,
  pageSizeOptions,
  onChange,
  onShowSizeChange,
}: PaginationFooterProps) => {
  const { current, pageSize, total } = pagination;

  return (
    <Flex
      justify="space-between"
      align="center"
      style={{ padding: "10px 12px", borderTop: "1px solid #E5E7EB" }}
      className="shrink-0 rounded-b-lg bg-[#FAFAFA]"
    >
      <span className="text-sm text-stone-600">
        Mostrando {shownCount} de {total}{" "}
        {total === 1 ? "registro" : "registros"}
      </span>

      <Pagination {...pagination} showSizeChanger={false} onChange={onChange} />

      <Select
        value={pageSize ?? pageSizeOptions[0]}
        onChange={(value) => onShowSizeChange(current, value)}
        options={pageSizeOptions.map((n) => ({
          value: n,
          label: `${n} registros`,
        }))}
      />
    </Flex>
  );
};
