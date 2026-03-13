import type { IIcon } from "@/interfaces/IIcon";

export const Minus = ({ style }: IIcon) => {
  return (
    <svg
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      className={`${style ?? "size-3 stroke-3 text-white"}`}
    >
      <line x1="5" y1="12" x2="19" y2="12"></line>
    </svg>
  );
};
