import type { ICollection } from "@/interfaces/ICollection";
import type { ICreateUserRequest, IUser } from "@/pages/users/interfaces/IUser";
import { httpClient } from "./api/axiosInstance";

const GetAllUsers = () => {
  return httpClient.get<ICollection<IUser>>("/user");
};

const CreateUser = (data?: Partial<ICreateUserRequest>) => {
  return httpClient.post("/user", data);
};

export const UserService = {
  GetAllUsers,
  CreateUser,
};
