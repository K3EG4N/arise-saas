import type { ILoader } from "@/interfaces/ILoader";
import { createContext } from "react";

export const LoaderContext = createContext<ILoader | undefined>(undefined);
