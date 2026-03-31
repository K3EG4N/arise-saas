import { createContext } from "react";
import type { ThemeContextType } from "./interfaces/ITheme";

export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined,
);
