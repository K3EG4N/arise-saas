import { Check } from "@/icons/Regular/Check";
import { Minus } from "@/icons/Regular/Minus";
import { useEffect, useState } from "react";
import type { ICheckbox } from "@/interfaces/ICheckbox";

export const Checkbox = ({ active = false, onCheck, onClick }: ICheckbox) => {
  const [isActive, setIsActive] = useState<boolean | "maybe">(active);

  useEffect(() => {
    setIsActive(active);
  }, [active]);

  const toggleActive = () => {
    const newActive = !isActive;
    setIsActive(newActive);

    if (onCheck != null) onCheck(newActive);
    if (onClick != null) onClick();
  };

  return (
    <div
      className={`flex size-4 cursor-pointer items-center justify-center rounded-sm border-[1.5px] ${isActive === true ? "border-teal-500 bg-teal-500" : isActive === "maybe" ? "border-teal-500" : "border-neutral-400"}`}
      onClick={toggleActive}
    >
      {isActive === true ? (
        <Check />
      ) : isActive === "maybe" ? (
        <Minus style="stroke 3.5 stroke-4 text-teal-500" />
      ) : null}
    </div>
  );
};
