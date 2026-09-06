import { useEffect } from "react";

export const useHotkey = (
  key: string | undefined,
  callback: () => void,
  ctrl = false,
) => {
  useEffect(() => {
    if (!key) {
      return;
    }

    const handleKeyDown = (e: KeyboardEvent) => {
      const pressedCtrl = e.ctrlKey || e.metaKey;
      const modifiersMatch = ctrl ? pressedCtrl : !pressedCtrl;

      if (e.key.toLowerCase() === key.toLowerCase() && modifiersMatch) {
        e.preventDefault();
        e.stopPropagation();
        callback();
      }
    };

    window.addEventListener("keydown", handleKeyDown, { capture: true });

    return () => {
      window.removeEventListener("keydown", handleKeyDown, true);
    };
  }, [key, callback, ctrl]);
};
