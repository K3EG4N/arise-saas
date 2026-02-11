import { CloseEye } from "@/icons/Regular/CloseEye";
import { OpenEye } from "@/icons/Regular/OpenEye";
import { useState } from "react";
import type { IInput } from "@/interfaces/IInput";

export const Input = ({
  placeholder,
  title,
  field,
  type,
  onChange,
}: IInput) => {
  const [typeState, setTypeState] = useState(type ?? "text");

  return (
    <div className="w-full">
      {title && (
        <span className="block mb-1.5 text-sm font-medium text-stone-900">
          {title}
        </span>
      )}
      <div className="relative flex">
        <input
          className={`w-full px-3 py-2 ${type === "password" ? "pr-8" : ""} border border-stone-300 rounded text-stone-900 placeholder-stone-400 transition outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/25`}
          type={typeState ?? "text"}
          onChange={onChange && ((e) => onChange(e.target.value))}
          placeholder={placeholder}
        />

        {type === "password" && (
          <div
            className="absolute top-1/2 -translate-y-1/2 right-2.5 cursor-pointer flex items-center justify-center text-stone-600 hover:text-stone-900 transition"
            onClick={() =>
              setTypeState(typeState === "password" ? "text" : "password")
            }
          >
            {typeState === "password" ? <OpenEye /> : <CloseEye />}
          </div>
        )}
      </div>
      {field && <span className="text-sm text-stone-500 ml-0.5">{field}</span>}
    </div>
  );
};
