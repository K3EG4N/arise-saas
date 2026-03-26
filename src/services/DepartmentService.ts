import { api } from "./BaseRequest";

const GetDepartmentsOptions = () => {
  return api.get("/department");
};

export const DepartmentService = {
  GetDepartmentsOptions,
};
