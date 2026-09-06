import { httpClient } from "./api/axiosInstance";

const GetDepartmentsOptions = () => {
  return httpClient.get("/department");
};

export const DepartmentService = {
  GetDepartmentsOptions,
};
