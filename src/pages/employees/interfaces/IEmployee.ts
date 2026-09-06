import type { IDisclosure } from "arise-ui";

export interface IEmployees {
  employeeId: string;
  name: string;
  lastName: string;
  fullName: string;
  email: string;
  photo: string;
  code: string;
  gender: string;
  genderId: string;
  dni: string;
  department: string;
  departmentId: string;
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

export interface IUpdateEmployeeRequest extends ICreateEmployeeRequest {
  employeeId: string;
}

export interface IUpdateEmployeeModal extends IDisclosure {
  employee: IEmployees | undefined;
}

export interface IDeleteEmployeeModal extends IDisclosure {
  employee: IEmployees | undefined;
}
