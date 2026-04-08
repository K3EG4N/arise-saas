import type { IDisclosure } from "arise-ui";

export interface IEmployees {
  name: string;
  email: string;
  photo: string;
  code: string;
  gender: string;
  dni: string;
  department: string;
  phone: string;
  hireDate: string;
  birthDate: string;
  status: string;
  statusCode: string;
}

export interface ICreateEmployeeRequest {
  name: string;
  lastName: string;
  dni: string;
  phone?: string;
  gender: string;
  birthDate: string;
  departmentId: string;
  file?: {
    name: string;
    extension: string;
    fileData: string;
  };
}

export interface IUpdateEmployeeModal extends IDisclosure {
  employee: IEmployees | undefined;
}
