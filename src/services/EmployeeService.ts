import type {
  ICreateEmployeeRequest,
  IEmployees,
  IUpdateEmployeeRequest,
} from "@/pages/employees/interfaces/IEmployee";
import type { ICollection } from "@/interfaces/ICollection";
import type { IBaseResponse } from "@/interfaces/IBaseResponse";
import type { ICurrentUser } from "@/interfaces/IAuth";
import type { IResult } from "@/interfaces/IRequest";
import { httpClient } from "./api/axiosInstance";

// const GetAllEmployees = (filter: IFilter, signal?: AbortSignal) => {
//   return httpClient.get<ICollection<IEmployees>>("/employee", {
//     params: filter,
//     signal: signal || new AbortController().signal,
//   });
// };

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
  //   GetAllEmployees,
  GetEmployeeByUserId,
  CreateEmployee,
  UpdateEmployee,
  //   GetUnassignedEmployees,
};
