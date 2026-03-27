import { useState } from "react";
import { EmployeeService } from "@/services/EmployeeService";
import type { IBaseResponse } from "@/interfaces/IBaseResponse";
import type { ICreateEmployeeRequest } from "../interfaces/IEmployee";
import type { AxiosError } from "axios";

export const useCreateEmployee = () => {
  const [loading, setLoading] = useState(false);
  const [request, setRequest] = useState<Partial<ICreateEmployeeRequest>>({});
  const [response, setResponse] = useState<IBaseResponse>();

  const createEmployee = () => {
    setLoading(true);
    EmployeeService.CreateEmployee(request)
      .then((res) => {
        setResponse({
          message: res.data.message,
          status: res.status,
          success: res.data.success,
        });
        setLoading(false);
      })
      .catch((e: AxiosError<IBaseResponse>) => {
        setLoading(false);

        setResponse({
          message: e.response?.data?.message,
          status: e.response?.status ?? 500,
          success: e.response?.data?.success ?? false,
        });
      })
      .finally(() => {
        setTimeout(() => {
          setResponse(undefined);
        }, 3000);
      });
  };

  return { loading, request, response, createEmployee, setRequest };
};
