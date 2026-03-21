export interface ICollection<T> {
  data: T[];
  page: number;
  totalItems: number;
  totalPages: number;
  currentPage: number;
}
