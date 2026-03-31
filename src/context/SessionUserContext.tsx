import { createContext } from "react";
import type { SessionContextType } from "./interfaces/ISessionUser";

export const SessionUserContext = createContext<SessionContextType | undefined>(
  undefined,
);

export type { SessionContextType };
