import { ChevronDown } from "@/icons/Regular/ChevronDown";
import { Check } from "@/icons/Regular/Check";
import type { IComboBox, IComboBoxOption } from "@/interfaces/IComboBox";
import { useEffect, useRef, useState } from "react";
import { Cross } from "@/icons/Regular/Cross";

export const ComboBox = ({
  options,
  placeholder,
  onChange,
  onSelect,
  showClear,
  defaultValue,
  title,
}: IComboBox) => {
  const defaultOption = options.find((o) => o.value === defaultValue) ?? null;
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState(defaultOption?.label ?? "");
  const [selected, setSelected] = useState<IComboBoxOption | null>(
    defaultOption,
  );
  const [highlighted, setHighlighted] = useState(-1);
  const [dropdownPosition, setDropdownPosition] = useState<"bottom" | "top">(
    "bottom",
  );

  const wrapperRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const filtered = options.filter((o) =>
    o.label.toLowerCase().includes(query.toLowerCase()),
  );

  const openDropdown = () => {
    if (wrapperRef.current) {
      const rect = wrapperRef.current.getBoundingClientRect();
      const spaceBelow = window.innerHeight - rect.bottom;

      if (spaceBelow < 250 && rect.top > 250) {
        setDropdownPosition("top");
      } else {
        setDropdownPosition("bottom");
      }
    }

    setIsOpen(true);
    setHighlighted(-1);
    setQuery("");
    inputRef.current?.focus();
  };

  const closeDropdown = () => {
    setIsOpen(false);
    setQuery(selected?.label ?? "");
  };

  const selectOption = (opt: IComboBoxOption) => {
    setSelected(opt);
    setQuery(opt.label);
    setIsOpen(false);
    onSelect?.(opt.value);
  };

  const clearSelection = (e: React.MouseEvent) => {
    e.stopPropagation();
    setSelected(null);
    setQuery("");
    onSelect?.(undefined as never);
    inputRef.current?.focus();
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    onChange?.(e.target.value);
    setHighlighted(-1);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown")
      setHighlighted((h) => Math.min(h + 1, filtered.length - 1));
    else if (e.key === "ArrowUp") setHighlighted((h) => Math.max(h - 1, 0));
    else if (e.key === "Enter" && highlighted >= 0)
      selectOption(filtered[highlighted]);
    else if (e.key === "Escape") closeDropdown();
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (!wrapperRef.current?.contains(e.target as Node)) closeDropdown();
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selected]);

  return (
    <div ref={wrapperRef} className="relative text-sm">
      {title && (
        <span
          className={`mb-1.5 block text-xs font-medium ${status === "error" ? "text-red-500" : "text-stone-900"}`}
        >
          {title}
        </span>
      )}
      <div className="relative">
        <input
          ref={inputRef}
          type="text"
          value={query}
          placeholder={placeholder}
          readOnly={!isOpen}
          onClick={() => (isOpen ? closeDropdown() : openDropdown())}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          className="w-full rounded border border-stone-300 p-2 text-stone-900 transition outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/25"
        />

        <div className="absolute top-1/2 right-2 flex -translate-y-1/2 items-center gap-1">
          {selected && showClear && (
            <button
              type="button"
              onMouseDown={clearSelection}
              className="cursor-pointer text-stone-800 transition-colors"
            >
              <Cross />
            </button>
          )}
          <div
            className={`cursor-pointer transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            onClick={() => (isOpen ? closeDropdown() : openDropdown())}
          >
            <ChevronDown />
          </div>
        </div>
      </div>

      <div
        className={`absolute z-50 w-full overflow-hidden rounded border border-stone-200 bg-white shadow-sm transition-all duration-200 ${
          dropdownPosition === "top"
            ? "bottom-full mb-1 origin-bottom"
            : "top-full mt-1 origin-top"
        } ${
          isOpen
            ? "max-h-60 scale-y-100 opacity-100"
            : "pointer-events-none max-h-0 scale-y-95 opacity-0"
        }`}
      >
        {filtered.length === 0 ? (
          <p className="px-3 py-2 text-stone-400">No results</p>
        ) : (
          filtered.map((opt, i) => (
            <div
              key={opt.value}
              onMouseDown={() => selectOption(opt)}
              className={`flex cursor-pointer items-center justify-between gap-2 px-3 py-2 transition-colors ${
                opt.value === selected?.value
                  ? "font-medium text-teal-600"
                  : "text-stone-800"
              } ${i === highlighted ? "bg-stone-100" : "hover:bg-stone-50"}`}
            >
              {opt.label}
              <span className="w-4 shrink-0">
                {opt.value === selected?.value && (
                  <Check style="size-3 stroke-3 text-teal-600" />
                )}
              </span>
            </div>
          ))
        )}
      </div>
    </div>
  );
};
