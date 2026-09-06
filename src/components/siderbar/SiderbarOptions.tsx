import { Divider } from "antd";
import { SidebarItem } from "./SiderbarItem";
import { useMenuManagement } from "@/hooks/menu/useMenuManagment";

interface SiderbarOptionsProps {
  collapsed: boolean;
}

export const SiderbarOptions = ({ collapsed }: SiderbarOptionsProps) => {
  const { menu } = useMenuManagement();

  return (
    <section className="flex flex-1 flex-col gap-2 overflow-x-hidden overflow-y-auto">
      {menu?.map((element) => (
        <article key={element.title}>
          <div className="grid">
            <span
              className={`col-start-1 row-start-1 self-center text-[10px] font-medium text-neutral-600/60 uppercase transition-opacity duration-300 ${
                collapsed ? "opacity-0" : "opacity-100"
              }`}
            >
              {element.title}
            </span>

            <Divider
              className={`col-start-1 row-start-1 m-0! self-center border-gray-300/70! transition-opacity duration-300 ${
                collapsed ? "opacity-100" : "opacity-0"
              }`}
              style={{ justifySelf: "center" }}
            />
          </div>

          <div className="mt-3 flex flex-col gap-1">
            {element.items?.map((item) => (
              <SidebarItem key={item.id} item={item} collapsed={collapsed} />
            ))}
          </div>
        </article>
      ))}
    </section>
  );
};
