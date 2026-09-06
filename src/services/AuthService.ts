import type { IResult } from "@/interfaces/IRequest";
import type { ILoginRequest, ILoginResponse } from "@/interfaces/IAuth";
import { httpClient } from "./api/axiosInstance";

const postLogin = async (request: ILoginRequest) => {
  const response = await httpClient.post<IResult<ILoginResponse>>(
    "/auth/login",
    request,
  );
  return response.data;
};

export const AuthService = { postLogin };
