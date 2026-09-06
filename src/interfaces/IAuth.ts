export interface ILoginRequest {
  email: string;
  password: string;
}

export interface ILoginResponse {
  token: string;
}

export interface ICurrentUser {
  employeeId: string;
  name: string;
  email: string;
  photo?: string;
}

export type AuthStatus =
  | "idle"
  | "loading"
  | "authenticated"
  | "unauthenticated"
  | "error";

export type IAuthContext = {
  token: string | null;
  user: ICurrentUser | null;
  status: AuthStatus;
  error: string | null;
  login: (token: string) => void;
  logout: () => void;
  refreshUser: () => Promise<void>;
};
