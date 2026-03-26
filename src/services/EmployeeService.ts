import { api } from "./BaseRequest";
import type {
  ICreateEmployeeRequest,
  IEmployees,
} from "@/pages/employees/interfaces/IEmployee";
import type { IFilter } from "arise-ui";
import type { ICollection } from "@/interfaces/ICollection";

const GetAllEmployees = (filter: IFilter, signal?: AbortSignal) => {
  return api.get<ICollection<IEmployees>>("/employee", {
    params: filter,
    signal: signal || new AbortController().signal,
  });
};

const CreateEmployee = (data: Partial<ICreateEmployeeRequest>) => {
  return api.post("/employee", data);
};

export const EmployeeService = {
  GetAllEmployees,
  CreateEmployee,
};
