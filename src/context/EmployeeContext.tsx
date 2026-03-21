import type { EmployeeContextType } from "@/context/IEmployee";
import { createContext } from "react";

export const EmployeeContext = createContext<EmployeeContextType | undefined>(
  undefined,
);

export type { EmployeeContextType };
