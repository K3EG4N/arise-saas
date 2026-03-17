import type { IBadge } from "@/interfaces/IBadge";

export const Badge = ({ text, status }: IBadge) => {
  return (
    <div
      className={`max-w-fit rounded-lg px-2 py-1 text-sm font-medium ${
        status === "success"
          ? "border-green-500 bg-green-400/15 text-green-600"
          : status === "warning"
            ? "border-yellow-500 bg-yellow-400/15 text-yellow-600/75"
            : status === "error"
              ? "border-red-500 bg-red-500/20 text-red-600/75"
              : "border-blue-500 bg-blue-500/20 text-blue-500"
      }`}
    >
      {text}
    </div>
  );
};
