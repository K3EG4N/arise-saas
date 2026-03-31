import elements from "../../mocs/Sidebar.json";
import { useRenderIcon } from "arise-ui";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { getIconByName } = useRenderIcon();
  const [current, setCurrent] = useState<number | string>(location?.state?.id);
  const [collapsed, setCollapsed] = useState(false);
  const [expandedMenus, setExpandedMenus] = useState<number[]>([]);

  useEffect(() => {
    const principal = elements[0].items.find((it) => it.id === 1)?.url;
    navigate(principal as string, {
      state: { id: 1 },
    });
  }, [navigate]);

  const getRoutePath = (id: number) => {
    const item = elements[0].items.find((it) => it.id === id);
    return { state: { route: item?.id === 1 ? null : item?.name, id: id } };
  };

  const toggleMenu = (id: number) => {
    setExpandedMenus((prev) =>
      prev.includes(id)
        ? prev.filter((menuId) => menuId !== id)
        : [...prev, id],
    );
  };

  return (
    <div
      className={`font-outfit flex flex-col gap-5 rounded bg-neutral-50 p-3 shadow transition-all duration-300 ${
        collapsed ? "w-20" : "w-64"
      }`}
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3 overflow-hidden">
          <div
            onClick={() => collapsed && setCollapsed(false)}
            className={`group relative flex size-11 shrink-0 items-center justify-center rounded-lg border border-neutral-200 bg-white transition-all ${
              collapsed ? "cursor-pointer hover:bg-neutral-100" : ""
            }`}
          >
            <img
              src="/logo.png"
              alt="Arise Logo"
              className={`size-7 transition-opacity duration-300 ${
                collapsed ? "group-hover:opacity-0" : "opacity-100"
              }`}
              draggable={false}
            />
            <div
              className={`absolute inset-0 flex items-center justify-center transition-all duration-300 ${
                collapsed
                  ? "opacity-0 group-hover:opacity-100"
                  : "pointer-events-none opacity-0"
              }`}
            >
              {
                getIconByName(
                  "chevronLeft",
                  "size-5 rotate-180 text-neutral-600",
                )?.icon
              }
            </div>
          </div>

          <div
            className={`flex flex-col overflow-hidden transition-all duration-300 ${
              collapsed ? "w-0 opacity-0" : "w-36 opacity-100"
            }`}
          >
            <h1 className="font-outfit text-[19px] leading-none font-semibold whitespace-nowrap text-neutral-800">
              Arise
            </h1>
            <span className="text-[12px] font-normal whitespace-nowrap text-neutral-400">
              Workspace platform
            </span>
          </div>
        </div>

        <button
          onClick={() => setCollapsed(true)}
          className={`flex shrink-0 cursor-pointer items-center justify-center rounded-md text-neutral-400 transition-all duration-200 hover:bg-neutral-200/80 hover:text-neutral-600 ${
            collapsed
              ? "pointer-events-none hidden w-0 opacity-0"
              : "size-8 opacity-100"
          }`}
        >
          {getIconByName("chevronLeft", "size-4 stroke-2")?.icon}
        </button>
      </div>

      <section className="size-full">
        {elements.map((element) => (
          <article key={element.title}>
            <div
              className={`overflow-hidden transition-all duration-300 ${
                collapsed ? "mb-0 h-0 opacity-0" : "mb-2 h-4.5 opacity-100"
              }`}
            >
              <span className="text-[11px] font-medium text-neutral-600/60 uppercase">
                {element.title}
              </span>
            </div>

            <ul className="mt-1 flex flex-col gap-2">
              {element.items.map((it) => {
                const isSelected = current === it.id;
                const hasChildren = it.children && it.children.length > 0;
                const isExpanded = expandedMenus.includes(it.id);

                return (
                  <li key={`parent-${it.id}`} className="flex flex-col">
                    <div
                      className={`group flex items-center rounded transition-all hover:bg-teal-600/15 ${
                        isSelected ? "bg-teal-600/15" : ""
                      } ${collapsed ? "w-11" : "w-full"}`}
                    >
                      <div
                        className="flex flex-1 cursor-pointer items-center gap-3 px-3 py-2"
                        onClick={() => {
                          setCurrent(it.id);
                          navigate(it.url, getRoutePath(it.id));
                        }}
                      >
                        {getIconByName(
                          it.icon as Parameters<typeof getIconByName>[0],
                          `size-5 shrink-0 transition-all duration-300 ${
                            isSelected
                              ? "text-teal-500 fill-teal-500"
                              : "text-neutral-600 fill-neutral-600 group-hover:text-teal-500 group-hover:fill-teal-500"
                          }`,
                        )?.icon ?? true}

                        <div
                          className={`overflow-hidden transition-all duration-300 ${
                            collapsed ? "w-0 opacity-0" : "w-36 opacity-100"
                          }`}
                        >
                          <span
                            className={`block font-medium whitespace-nowrap transition-all ${
                              isSelected
                                ? "text-teal-700"
                                : "text-neutral-600 group-hover:text-teal-700"
                            }`}
                          >
                            {it.name}
                          </span>
                        </div>
                      </div>

                      {hasChildren && !collapsed && (
                        <div
                          onClick={(e) => {
                            e.stopPropagation();
                            toggleMenu(it.id);
                          }}
                          className="flex h-full cursor-pointer items-center pr-3 pl-1 text-neutral-400 hover:text-teal-600"
                        >
                          <div
                            className={`transition-transform duration-300 ${
                              isExpanded ? "rotate-180" : ""
                            }`}
                          >
                            {getIconByName("chevronDown")?.icon}
                          </div>
                        </div>
                      )}
                    </div>

                    {hasChildren && (
                      <div
                        className={`grid transition-all duration-300 ease-in-out ${
                          isExpanded && !collapsed
                            ? "mt-1 grid-rows-[1fr] opacity-100"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <ul className="relative ml-5.5 flex flex-col gap-1 border-l border-neutral-300 py-1 pl-4">
                            {it.children.map((child) => {
                              const childIdKey = `${it.id}-${child.id}`;
                              const isChildSelected = current === childIdKey;

                              return (
                                <li
                                  key={childIdKey}
                                  onClick={() => {
                                    setCurrent(childIdKey);
                                    navigate(child.url, getRoutePath(child.id));
                                  }}
                                  className={`relative flex cursor-pointer items-center rounded px-3 py-1.5 transition-all hover:bg-teal-600/10 ${
                                    isChildSelected
                                      ? "bg-teal-600/10 font-semibold text-teal-700"
                                      : "text-neutral-500 hover:text-teal-700"
                                  }`}
                                >
                                  <span className="absolute top-1/2 -left-4 h-px w-3 -translate-y-1/2 bg-neutral-300"></span>

                                  <span className="py-0.5 text-sm whitespace-nowrap">
                                    {child.name}
                                  </span>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                      </div>
                    )}
                  </li>
                );
              })}
            </ul>
          </article>
        ))}
      </section>
    </div>
  );
};
