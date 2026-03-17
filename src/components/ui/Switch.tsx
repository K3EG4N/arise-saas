import { useEffect, useState } from "react";
import type { ISwitch } from "@/interfaces/ISwitch";

export const Switch = ({ active = false, onToggle, onClick }: ISwitch) => {
  const [isActive, setIsActive] = useState(active);

  useEffect(() => {
    setIsActive(active);
  }, [active]);

  const toggleActive = () => {
    const newActive = !isActive;
    setIsActive(newActive);

    if (onToggle != null) onToggle(newActive);
    if (onClick != null) onClick();
  };

  return (
    <div
      onClick={toggleActive}
      className={`relative h-5 w-9 shrink-0 cursor-pointer overflow-hidden rounded-full transition-colors duration-300 ${
        isActive ? "bg-teal-500" : "bg-gray-300"
      }`}
    >
      <div
        className="absolute h-3.5 w-3.5 rounded-full bg-white shadow-lg transition-all duration-300"
        style={{
          top: "3px",
          left: isActive ? "calc(100% - 17px)" : "3px",
        }}
      />
    </div>
  );
};
