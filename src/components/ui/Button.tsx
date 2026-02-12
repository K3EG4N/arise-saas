import { Loader } from "@/icons/Regular/Loader";
import type { IButton } from "@/interfaces/IButton";

export const Button = ({
  label,
  isLoading,
  onClick,
  appareance,
  icon,
  iconPosition,
}: IButton) => {
  return (
    <button
      disabled={isLoading}
      className={`flex h-9.5 text-sm w-full items-center justify-center gap-2 rounded border-[1.5px] px-2 py-2.5 font-medium transition ${
        isLoading
          ? "cursor-not-allowed border-stone-200 bg-[#F0F0F0] text-gray-600"
          : appareance === "ghost"
            ? "cursor-pointer border-stone-300 bg-white text-black hover:bg-stone-100"
            : "cursor-pointer bg-teal-500 text-white hover:bg-teal-600"
      }`}
      onClick={onClick && onClick}
    >
      {icon && iconPosition === "left" && icon}
      {isLoading ? <Loader /> : label}
      {icon && iconPosition === "right" && icon}
    </button>
  );
};
