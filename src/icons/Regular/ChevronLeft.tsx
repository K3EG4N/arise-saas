import type { IIcon } from "@/interfaces/IIcon";

export const ChevronLeft = ({ style }: IIcon) => {
  return (
    <svg
      viewBox="0 0 24 24"
      stroke="currentColor"
      fill="none"
      className={`${style ? style : "size-4 stroke-2"}`}
    >
      <polyline points="15 18 9 12 15 6"></polyline>
    </svg>
  );
};
