import { Loader } from "@/icons/Loader";
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
      className={`border-[1.5px] w-full px-2 py-2.5 rounded font-medium transition flex items-center justify-center h-10.5 gap-2 ${
        isLoading
          ? "border-stone-200 bg-[#F0F0F0] text-gray-600 cursor-not-allowed"
          : appareance === "ghost"
            ? "bg-white border-stone-300 hover:bg-stone-100 text-black cursor-pointer"
            : "bg-teal-500 text-white hover:bg-teal-600 cursor-pointer"
      }`}
      onClick={onClick && onClick}
    >
      {icon && iconPosition === "left" && icon}
      {isLoading ? <Loader /> : label}
      {icon && iconPosition === "right" && icon}
    </button>
  );
};
