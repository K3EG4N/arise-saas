import { useState } from "react";
import { UserService } from "@/services/UserService";
import type { ICreateUserRequest } from "../interfaces/IUser";
import type { IBaseResponse } from "@/interfaces/IBaseResponse";
import type { AxiosError } from "axios";

export const useCreateUser = (onClose: () => void, reload?: () => void) => {
  const [loading, setLoading] = useState(false);
  const [request, setRequest] = useState<Partial<ICreateUserRequest>>();
  const [response, setResponse] = useState<IBaseResponse>();

  const createUser = () => {
    setLoading(true);
    UserService.CreateUser(request)
      .then((res) => {
        setLoading(false);

        setResponse({
          message: res.data.message,
          status: res.status,
          success: res.data.success,
        });

        if (res.data.success) {
          reload?.();
          setTimeout(onClose, 3000);
        }
      })
      .catch((e: AxiosError<IBaseResponse>) => {
        setLoading(false);

        setResponse({
          message: e.response?.data?.message,
          status: e.response?.status ?? 500,
          success: e.response?.data?.success ?? false,
        });
      })
      .finally(() => {
        setTimeout(() => {
          setResponse(undefined);
        }, 3000);
      });
  };

  return { loading, request, response, createUser, setRequest };
};
