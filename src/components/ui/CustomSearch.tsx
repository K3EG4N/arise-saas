import { useHotkey } from "@/hooks/useHotKey";
import { Input, type InputRef } from "antd";
import { SearchOutlined } from "@ant-design/icons";
import { useRef } from "react";
import { Kbd } from "./Kbd";

interface ISearcher {
  size?: "large" | "middle" | "small";
  suffix?: React.ReactNode;
  hotkey?: string;
  onSearch?: (value: string) => void;
  collapsed?: boolean;
  onExpandRequest?: () => void; // le dice al padre "expándeme"
}

export const CustomSearch = ({
  size,
  suffix,
  hotkey,
  onSearch,
  collapsed,
  onExpandRequest,
}: ISearcher) => {
  const ref = useRef<InputRef>(null);

  useHotkey(
    hotkey ?? "",
    () => {
      onExpandRequest?.();
      setTimeout(() => ref.current?.focus(), 300);
    },
    !!hotkey,
  );

  const handleCollapsedClick = () => {
    onExpandRequest?.();
    setTimeout(() => ref.current?.focus(), 300);
  };

  return (
    <div className="relative">
      <Input
        ref={ref}
        size={size}
        prefix={<SearchOutlined className="text-base pr-1.5!" />}
        placeholder={collapsed ? "" : "Search..."}
        suffix={
          collapsed
            ? null
            : (suffix ?? (hotkey && <Kbd>{hotkey.toUpperCase()}</Kbd>))
        }
        onKeyDown={(e) => e.key === "Escape" && ref.current?.blur()}
        onChange={(e) => onSearch?.(e.target.value)}
        readOnly={collapsed}
        className={`px-2.75! pl-3.5! transition-all duration-300 ease-in-out ${
          collapsed ? "h-[41.79px]! w-11!" : "w-full"
        }`}
      />

      {collapsed && (
        <button
          type="button"
          aria-label="Buscar"
          onClick={handleCollapsedClick}
          className="absolute inset-0 size-9 h-[41.79px] w-11.5 cursor-pointer rounded-lg"
        />
      )}
    </div>
  );
};
