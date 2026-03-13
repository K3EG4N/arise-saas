import { CloseEye } from "@/icons/Regular/CloseEye";
import { OpenEye } from "@/icons/Regular/OpenEye";
import { useState } from "react";
import type { IInput } from "@/interfaces/IInput";

export const Input = ({
  placeholder,
  title,
  field,
  type,
  status,
  onChange,
  rightText,
}: IInput) => {
  const [typeState, setTypeState] = useState(type ?? "text");

  return (
    <div className="w-full">
      <div className="flex justify-between">
        {title && (
          <span
            className={`mb-1.5 block text-sm font-medium ${status === "error" ? "text-red-500" : "text-stone-900"}`}
          >
            {title}
          </span>
        )}
        {rightText && (
          <span className="mb-1.5 block cursor-pointer text-xs font-medium text-stone-900 underline">
            {rightText}
          </span>
        )}
      </div>
      <div className="relative flex">
        <input
          className={`w-full px-3 py-2 ${type === "password" ? "pr-8" : ""} rounded border transition outline-none ${
            status === "error"
              ? "border-red-500 focus:border-red-500 focus:ring-2 focus:ring-red-500/25"
              : "border-stone-300 focus:border-teal-500 focus:ring-2 focus:ring-teal-500/25"
          } text-stone-900 placeholder-stone-400`}
          type={typeState ?? "text"}
          onChange={onChange && ((e) => onChange(e.target.value))}
          placeholder={placeholder}
        />

        {type === "password" && (
          <div
            className="absolute top-1/2 right-3.5 flex -translate-y-1/2 cursor-pointer items-center justify-center text-stone-600 transition hover:text-stone-900"
            onClick={() =>
              setTypeState(typeState === "password" ? "text" : "password")
            }
          >
            {typeState === "password" ? <OpenEye /> : <CloseEye />}
          </div>
        )}
      </div>
      {field && (
        <span
          className={`ml-0.5 text-xs font-medium ${status === "error" ? "text-red-500" : "text-stone-400"}`}
        >
          {field}
        </span>
      )}
    </div>
  );
};
