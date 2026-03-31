export interface ISessionUser {
  employeeId: string;
  name: string;
  email: string;
  foto?: string;
}

export type SessionContextType = {
  user: ISessionUser | null;
  setUser: (employee: ISessionUser | null) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  clearUser: () => void;
};
