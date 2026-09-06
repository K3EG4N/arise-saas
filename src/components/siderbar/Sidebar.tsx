import { useState } from "react";
import { SidebarUser } from "./SidebarUser";
import { SiderbarOptions } from "./SiderbarOptions";
import { Divider } from "antd";
import { SiderbarHeader } from "./SiderbarHeader";
import { CustomSearch } from "../ui/CustomSearch";
import { Kbd } from "../ui/Kbd";

export const Sidebar = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside
      className={`gap-f flex h-full shrink-0 flex-col overflow-x-hidden rounded-xl border border-stone-200 bg-white p-4 transition-[width] duration-500 ease-in-out ${
        collapsed ? "w-[81.6px]" : "w-70"
      }`}
    >
      <SiderbarHeader collapsed={collapsed} setCollapsed={setCollapsed} />

      <div className="my-4 overflow-hidden">
        <CustomSearch
          suffix={<Kbd>Ctrl + K</Kbd>}
          hotkey="k"
          size="large"
          collapsed={collapsed}
          onExpandRequest={() => setCollapsed(false)} // tu setter del sidebar
        />
      </div>

      <SiderbarOptions collapsed={collapsed} />

      <Divider size="small" />

      <SidebarUser collapsed={collapsed} />
    </aside>
  );
};
