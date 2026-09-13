import { httpClient } from "./api/axiosInstance";
import type {
  ICreateEmployeeRequest,
  IEmployees,
  IUpdateEmployeeRequest,
} from "@/pages/employees/interfaces/IEmployee";
import type { IBaseResponse } from "@/interfaces/IBaseResponse";
import type { ICurrentUser } from "@/interfaces/IAuth";
import type { IResult } from "@/interfaces/IRequest";
import type { IPagedResult, IPagination } from "@/interfaces/IPagination";

const getAllEmployees = async (
  filter: IPagination,
  signal?: AbortSignal,
) => {
  const response = await httpClient.get<IResult<IPagedResult<IEmployees>>>(
    "/employee",
    {
      params: filter,
      signal: signal || new AbortController().signal,
    },
  );
  return response.data;
};

const CreateEmployee = (data: Partial<ICreateEmployeeRequest>) => {
  return httpClient.post<IBaseResponse>("/employee", data);
};

const UpdateEmployee = (data: Partial<IUpdateEmployeeRequest>) => {
  return httpClient.put<IBaseResponse>(`/employee/${data.employeeId}`, data);
};

const GetEmployeeByUserId = async (userId: string) => {
  const response = await httpClient.get<IResult<ICurrentUser>>(
    `/employee/by-userId/${userId}`,
  );
  return response.data;
};

// const GetUnassignedEmployees = () => {
//   return httpClient.get<IComboBoxOption[]>("/employee/unassigned");
// };

export const EmployeeService = {
  getAllEmployees,
  GetEmployeeByUserId,
  CreateEmployee,
  UpdateEmployee,
  //   GetUnassignedEmployees,
};
