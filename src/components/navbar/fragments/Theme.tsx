import { ThemeContext } from "@/context/ThemeContext";
import { useRenderIcon } from "arise-ui";
import { useContext } from "react";

export const Theme = () => {
  const { getIconByName } = useRenderIcon();
  const { theme, toggleTheme } = useContext(ThemeContext) ?? {};
  return (
    <button
      className="cursor-pointer rounded-lg p-1.5 text-neutral-700 transition-colors hover:bg-neutral-200/50 hover:text-neutral-900 focus:outline-none"
      onClick={() => toggleTheme && toggleTheme()}
    >
      {
        getIconByName(theme === "light" ? "moon" : "sun", "size-4.5 stroke-2")
          ?.icon
      }
    </button>
  );
};
