export interface IEmployees {
  name: string;
  email: string;
  photo: string;
  code: string;
  phone?: string;
  hireDate: string;
  status: string;
  statusCode: string;
}

export interface ICreateEmployeeRequest {
  name: string;
  image?: string;
  lastName: string;
  dni: string;
  phone?: string;
  gender: string;
  birthDate: string;
  departmentId: string;
}
