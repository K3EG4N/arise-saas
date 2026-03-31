import { useState, type ReactNode } from "react";
import { SessionUserContext } from "./SessionUserContext";
import type { ISessionUser } from "./interfaces/ISessionUser";

export const SessionUserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<ISessionUser | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const clearUser = () => {
    setUser(null);
  };

  return (
    <SessionUserContext.Provider
      value={{
        user,
        setUser,
        isLoading,
        setIsLoading,
        clearUser,
      }}
    >
      {children}
    </SessionUserContext.Provider>
  );
};
