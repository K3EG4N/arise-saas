import { EmployeeService } from "@/services/EmployeeService";
import { useState } from "react";
import type { IUpdateEmployeeRequest } from "../interfaces/IEmployee";
import type { IBaseResponse } from "@/interfaces/IBaseResponse";
import type { AxiosError } from "axios";

export const useUpdateEmployee = (onClose: () => void, reload?: () => void) => {
  const [loading, setLoading] = useState(false);
  const [request, setRequest] = useState<Partial<IUpdateEmployeeRequest>>({});
  const [response, setResponse] = useState<IBaseResponse>();

  const updateEmployee = () => {
    setLoading(true);
    EmployeeService.UpdateEmployee(request)
      .then((res) => {
        setLoading(false);
        setResponse({
          message: res.data.message,
          status: res.status,
          success: res.data.success,
        });

        if (res.data.success) {
          reload?.();
          setTimeout(onClose, 3000);
        }
      })
      .catch((e: AxiosError<IBaseResponse>) => {
        setLoading(false);
        setResponse({
          message: e.response?.data?.message,
          status: 500,
          success: e.response?.data?.success ?? false,
        });
      })
      .finally(() => {
        setTimeout(() => {
          setResponse(undefined);
        }, 3000);
      });
  };

  return { loading, request, setRequest, response, updateEmployee };
};
