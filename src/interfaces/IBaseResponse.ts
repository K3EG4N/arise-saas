export interface IBaseResponse {
  success: boolean;
  message?: string;
  exception?: string;
  status: number;
}
