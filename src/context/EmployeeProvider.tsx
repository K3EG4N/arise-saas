import type { IEmployee } from "@/interfaces/IEmployee";
import { useState, type ReactNode } from "react";
import { EmployeeContext } from "./EmployeeContext";

export const EmployeeProvider = ({ children }: { children: ReactNode }) => {
  const [employee, setEmployee] = useState<IEmployee | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const clearEmployee = () => {
    setEmployee(null);
  };

  return (
    <EmployeeContext.Provider
      value={{
        employee,
        setEmployee,
        isLoading,
        setIsLoading,
        clearEmployee,
      }}
    >
      {children}
    </EmployeeContext.Provider>
  );
};
