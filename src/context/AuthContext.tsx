import type { IAuthContext } from "@/interfaces/IAuth";
import { createContext } from "react";

export const AuthContext = createContext<IAuthContext | undefined>(undefined);
