import type { EmployeeContextType } from "@/interfaces/IEmployee";
import { createContext } from "react";

export const EmployeeContext = createContext<EmployeeContextType | undefined>(
  undefined,
);

export type { EmployeeContextType };
