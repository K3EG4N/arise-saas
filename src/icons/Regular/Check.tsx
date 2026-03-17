import type { IIcon } from "@/interfaces/IIcon";

export const Check = ({ style }: IIcon) => {
  return (
    <svg
      viewBox="0 0 24 24"
      stroke="currentColor"
      fill="none"
      className={`${style ?? "size-3 stroke-3 text-white"}`}
    >
      <polyline points="20 6 9 17 4 12"></polyline>
    </svg>
  );
};
