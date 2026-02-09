export interface IEmployee {
  employeeId: string;
  name: string;
  email: string;
  foto?: string;
}

export interface EmployeeContextType {
  employee: IEmployee | null;
  setEmployee: (employee: IEmployee | null) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
  clearEmployee: () => void;
}
