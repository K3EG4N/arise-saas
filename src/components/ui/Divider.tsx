import type { IDivider } from "@/interfaces/IDivider";

export const Divider = ({ label, orientation = "horizontal" }: IDivider) => {
  if (orientation === "vertical") {
    return (
      <div className="flex items-center justify-center gap-3 h-8">
        <div className="w-px h-full bg-stone-300"></div>
        {label && (
          <span className="text-sm text-stone-400 whitespace-nowrap -rotate-90">
            {label}
          </span>
        )}
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3 my-4">
      <div className="flex-1 h-px bg-stone-200"></div>
      {label && (
        <span className="text-sm text-stone-400 whitespace-nowrap">
          {label}
        </span>
      )}
      <div className="flex-1 h-px bg-stone-200"></div>
    </div>
  );
};
