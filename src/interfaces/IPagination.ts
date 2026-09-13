export interface IPagedResult<T> {
  items: T[];
  pageNumber: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
}

export interface IPagination {
  search?: string;
  pageSize: number;
  page: number;
}
