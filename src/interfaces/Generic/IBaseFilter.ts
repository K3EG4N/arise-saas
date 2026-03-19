export interface IBaseFilter {
  query: string;
  limit: number;
  offset: number;
}

export const defaultFilter: IBaseFilter = {
  query: "",
  limit: 50,
  offset: 0,
};
