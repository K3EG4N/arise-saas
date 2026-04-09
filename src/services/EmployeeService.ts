import { api } from "./BaseRequest";
import type {
  ICreateEmployeeRequest,
  IEmployees,
  IUpdateEmployeeRequest,
} from "@/pages/employees/interfaces/IEmployee";
import type { IFilter } from "arise-ui";
import type { ICollection } from "@/interfaces/ICollection";
import type { IBaseResponse } from "@/interfaces/IBaseResponse";

const GetAllEmployees = (filter: IFilter, signal?: AbortSignal) => {
  return api.get<ICollection<IEmployees>>("/employee", {
    params: filter,
    signal: signal || new AbortController().signal,
  });
};

const CreateEmployee = (data: Partial<ICreateEmployeeRequest>) => {
  return api.post<IBaseResponse>("/employee", data);
};

const UpdateEmployee = (data: Partial<IUpdateEmployeeRequest>) => {
  return api.put<IBaseResponse>(`/employee/${data.employeeId}`, data);
};

export const EmployeeService = {
  GetAllEmployees,
  CreateEmployee,
  UpdateEmployee,
};
