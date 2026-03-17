import { Loader } from "@/icons/Regular/Loader";
import type { IButton } from "@/interfaces/IButton";

export const Button = ({
  label,
  isLoading,
  onClick,
  appareance,
  icon,
  iconPosition = "left",
}: IButton) => {
  return (
    <button
      disabled={isLoading}
      className={`flex h-10.5 w-full items-center justify-center gap-2 rounded border-[1.5px] px-2 py-0 text-sm font-medium transition ${
        isLoading
          ? "cursor-not-allowed border-stone-200 bg-[#F0F0F0] text-gray-600"
          : appareance === "outline"
            ? "cursor-pointer border-stone-300 bg-white text-black hover:bg-stone-100"
            : appareance === "ghost"
              ? "h-fit cursor-pointer border-transparent bg-transparent px-2.5 py-2 text-neutral-700 hover:bg-neutral-200/50"
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
