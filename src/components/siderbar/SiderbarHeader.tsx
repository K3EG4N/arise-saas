import { RightOutlined, LeftOutlined } from "@ant-design/icons";
import { Tag } from "antd";

export const SiderbarHeader = ({
  collapsed,
  setCollapsed,
}: {
  collapsed: boolean;
  setCollapsed: (collapsed: boolean) => void;
}) => {
  return (
    <div className="flex items-center gap-3">
      <div className="relative flex size-11 shrink-0 items-center justify-center rounded-lg border border-stone-200 bg-white shadow-sm">
        <img
          draggable={false}
          src="/logo.png"
          alt="arise-logo"
          className="size-10 shrink-0 object-contain p-1.5"
        />

        {collapsed && (
          <button
            className="group absolute inset-0 flex cursor-pointer items-center justify-center rounded-lg transition-colors hover:bg-white/80"
            onClick={() => setCollapsed(false)}
          >
            <RightOutlined className="text-xs text-stone-700 opacity-0 group-hover:opacity-100" />
          </button>
        )}
      </div>

      <div
        className={`flex-1 overflow-hidden whitespace-nowrap transition-all duration-500 ${
          collapsed ? "w-0 opacity-0" : "w-full opacity-100"
        }`}
      >
        <div className="flex items-center gap-2">
          <p className="truncate text-base leading-tight font-semibold tracking-tight text-stone-900">
            Arise - SaaS
          </p>
          <Tag color={"#00A86B"}>Beta</Tag>
        </div>
        <p className="truncate text-xs text-stone-500">Versión 1.0.0</p>
      </div>

      {!collapsed && (
        <button
          className="shrink-0 cursor-pointer rounded px-2 py-1 transition-all hover:bg-gray-100"
          onClick={() => setCollapsed(true)}
        >
          <LeftOutlined className="text-xs" />
        </button>
      )}
    </div>
  );
};
