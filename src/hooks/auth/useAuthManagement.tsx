import { useNavigate } from "react-router-dom";
import { useApiRequest } from "../useApiRequest";
import { AuthService } from "@/services/AuthService";
import { useAuthContext } from "../context/useAuthContext";
import { useLoaderContext } from "../context/useLoaderContext";
import type { ILoginRequest } from "@/interfaces/IAuth";

export const useAuthManagement = () => {
  const navigate = useNavigate();
  const { execute, loading } = useApiRequest();
  const { setLoading } = useLoaderContext();
  const { login } = useAuthContext();

  const handleLogin = async (request: ILoginRequest) => {
    const result = await execute(() => AuthService.postLogin(request));

    if (result?.isSuccess) {
      login(result.value?.token ?? "");
      setLoading(true);
      setTimeout(() => {
        navigate("/dashboard");
      }, 2000);
    }
  };

  return { handleLogin, loading };
};
