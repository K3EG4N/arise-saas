import type { IBaseFilter } from "./Generic/IBaseFilter";

export interface IPagination {
  setting: IPaginationSettings;
  loading?: boolean;
}

export interface IPaginationSettings<
  TFilter extends IBaseFilter = IBaseFilter,
> {
  totalItems: number;
  totalPages: number;
  currentPage: number;
  pageSize: number;
  filterSetter: React.Dispatch<React.SetStateAction<TFilter>>;
}

export const defaultPagination = {
  totalItems: 0,
  totalPages: 0,
  currentPage: 1,
  pageSize: 50,
  filterSetter: (() => {}) as React.Dispatch<React.SetStateAction<IBaseFilter>>,
};
