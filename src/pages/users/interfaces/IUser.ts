export interface IUser {
  userId: string;
  email: string;
  username?: null;
  employeeCode: string;
  dni: string;
}

export interface ICreateUserRequest {
  email: string;
  employeeId: string;
  password: string;
}
