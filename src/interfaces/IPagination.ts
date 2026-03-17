export interface IPagination {
  setting?: IPaginationSettings;
}

export interface IPaginationSettings {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
}
