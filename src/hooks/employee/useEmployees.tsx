import { useEffect, useState } from "react";
import { EmployeeService } from "@/services/EmployeeService";
import { useApiRequest } from "../useApiRequest";
import { useAbortController } from "../useAbortControler";
import type { IEmployees } from "@/pages/employees/interfaces/IEmployee";
import type { IPagedResult, IPagination } from "@/interfaces/IPagination";

export const useEmployees = (pagination: IPagination) => {
  const { getSignal } = useAbortController();
  const { execute, loading } = useApiRequest();
  const [employees, setEmployees] = useState<IPagedResult<IEmployees>>();

  useEffect(() => {
    if (pagination) {
      getEmployees();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pagination]);

  const getEmployees = async () => {
    const response = await execute(() =>
      EmployeeService.getAllEmployees(pagination, getSignal()),
    );

    if (response?.isSuccess) {
      setEmployees(response.value);
    }
  };

  return { loading, employees, getEmployees };
};
