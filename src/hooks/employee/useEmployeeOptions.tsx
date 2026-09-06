import { EmployeeService } from "@/services/EmployeeService";
import type { IComboBoxOption } from "arise-ui";
import { useEffect, useState } from "react";

export const useEmployeeOptions = () => {
  const [employeeOptions, setOptions] = useState<IComboBoxOption[]>([]);

  const getUnassignedEmployees = () => {
    EmployeeService.GetUnassignedEmployees().then((res) => {
      setOptions(res.data);
    });
  };

  useEffect(() => {
    getUnassignedEmployees();
  }, []);

  return { employeeOptions, getUnassignedEmployees };
};
