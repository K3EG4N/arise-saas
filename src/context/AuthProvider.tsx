import { useCallback, useEffect, useMemo, useState } from "react";
import { AuthContext } from "./AuthContext";
import { jwtDecode } from "jwt-decode";
import { useApiRequest } from "@/hooks/useApiRequest";
import { EmployeeService } from "@/services/EmployeeService";
import type { IJwtPayload } from "@/interfaces/IToken";
import type { AuthStatus, ICurrentUser } from "@/interfaces/IAuth";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { execute } = useApiRequest();
  const [user, setUser] = useState<ICurrentUser | null>(null);
  const [status, setStatus] = useState<AuthStatus>("idle");
  const [error, setError] = useState<string | null>(null);
  const [token, setTokenState] = useState<string | null>(() =>
    localStorage.getItem("token"),
  );

  const fetchUser = useCallback(
    async (currentToken: string) => {
      setStatus("loading");
      setError(null);
      try {
        const { sub } = jwtDecode<IJwtPayload>(currentToken);

        const result = await execute(() =>
          EmployeeService.GetEmployeeByUserId(sub),
        );

        if (result?.isSuccess && result.value) {
          setUser(result.value);
          setStatus("authenticated");
        } else {
          throw new Error("No se pudo obtener el usuario");
        }
      } catch (err) {
        setUser(null);
        setStatus("error");
        setError(err instanceof Error ? err.message : "Error desconocido");
      }
    },
    [execute],
  );

  useEffect(() => {
    if (token) {
      fetchUser(token);
    } else {
      setStatus("unauthenticated");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const login = useCallback(
    (newToken: string) => {
      localStorage.setItem("token", newToken);
      setTokenState(newToken);
      fetchUser(newToken);
    },
    [fetchUser],
  );

  const logout = useCallback(() => {
    localStorage.removeItem("token");
    setTokenState(null);
    setUser(null);
    setStatus("unauthenticated");
    setError(null);
  }, []);

  const refreshUser = useCallback(async () => {
    if (token) await fetchUser(token);
  }, [token, fetchUser]);

  const value = useMemo(
    () => ({ token, user, status, error, login, logout, refreshUser }),
    [token, user, status, error, login, logout, refreshUser],
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
