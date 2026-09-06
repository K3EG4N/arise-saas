export interface IValidation {
  type: string;
  title: string;
  status: number;
  errors: Record<string, string[]>;
  traceId: string;
}

export interface IResult<T = never> {
  value?: T;
  message: string | null;
  isSuccess: boolean;
  error: string | null;
  errorType: number;
  validationErrors: Record<string, string[]> | null;
}
