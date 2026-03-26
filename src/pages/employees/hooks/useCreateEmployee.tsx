import { useState } from "react";
import { EmployeeService } from "@/services/EmployeeService";
import type { IBaseResponse } from "@/interfaces/IBaseResponse";
import type { ICreateEmployeeRequest } from "../interfaces/IEmployee";

export const useCreateEmployee = () => {
  const [loading, setLoading] = useState(false);
  const [request, setRequest] = useState<Partial<ICreateEmployeeRequest>>({});
  const [response, setResponse] = useState<IBaseResponse>();

  const createEmployee = () => {
    setLoading(true);
    EmployeeService.CreateEmployee(request)
      .then((res) => {
        setResponse(res.data);
        setLoading(false);
      })
      .catch(() => {
        setLoading(false);
      });
  };

  return { loading, request, response, createEmployee, setRequest };
};
