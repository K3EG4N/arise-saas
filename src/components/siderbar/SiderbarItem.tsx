import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Tooltip } from "antd";
import { DownOutlined } from "@ant-design/icons";
import { resolveIcon } from "../../icons/resolveIcon";
import type { IMenuItem } from "@/interfaces/IMenu";

interface SidebarItemProps {
  item: IMenuItem;
  collapsed: boolean;
  depth?: number;
}

function isPathActive(pathname: string, itemPath: string): boolean {
  return pathname === itemPath || pathname.startsWith(`${itemPath}/`);
}

function hasActiveDescendant(item: IMenuItem, pathname: string): boolean {
  return (
    item.children?.some((child) => {
      const childPath = `/${child.url}`;
      return (
        isPathActive(pathname, childPath) ||
        hasActiveDescendant(child, pathname)
      );
    }) ?? false
  );
}

export const SidebarItem = ({
  item,
  collapsed,
  depth = 0,
}: SidebarItemProps) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const itemPath = `/${item.url}`;
  const isActive = isPathActive(pathname, itemPath);
  const hasChildren = item.children.length > 0;
  const childActive = hasActiveDescendant(item, pathname);

  const [expanded, setExpanded] = useState(childActive);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (childActive) setExpanded(true);
  }, [childActive]);

  const isOpen = expanded && !collapsed;

  const hasIcon = Boolean(item.icon);
  const { Icon: IconOutline } = hasIcon
    ? resolveIcon(item.icon, "outline")
    : { Icon: null };
  const { Icon: IconSolid } = hasIcon
    ? resolveIcon(item.icon, "solid")
    : { Icon: null };

  const handleClick = () => {
    if (hasChildren) {
      setExpanded((prev) => !prev);
    }
    navigate(itemPath);
  };

  return (
    <div className="flex flex-col gap-1">
      <Tooltip title={collapsed ? item.name : ""} placement="right">
        <button
          type="button"
          className={`group focus-visible:ring-jade-500 flex w-full cursor-pointer items-center justify-start rounded-lg p-2.5 transition-colors focus-visible:ring-2 focus-visible:outline-none ${
            isActive ? "bg-jade-100/60" : "hover:bg-jade-100/60"
          }`}
          onClick={handleClick}
        >
          {hasIcon && (
            <span
              className={`relative flex size-7 shrink-0 items-center justify-center rounded-md text-[15px] transition-colors ${
                isActive
                  ? "text-jade-600"
                  : "group-hover:text-jade-600 text-stone-700"
              }`}
            >
              {IconOutline && (
                <IconOutline
                  className={`absolute transition-opacity duration-150 ${
                    isActive ? "opacity-0" : "opacity-100 group-hover:opacity-0"
                  }`}
                />
              )}
              {IconSolid && (
                <IconSolid
                  className={`absolute transition-opacity duration-150 ${
                    isActive
                      ? "opacity-100"
                      : "opacity-0 group-hover:opacity-100"
                  }`}
                />
              )}
            </span>
          )}

          <span
            className={`ml-5 overflow-hidden text-start text-sm font-medium whitespace-nowrap transition-all duration-300 ease-in-out ${
              isActive
                ? "text-jade-600"
                : "group-hover:text-jade-600 text-stone-700"
            } ${collapsed ? "w-0 opacity-0" : "w-fit opacity-100"} ${
              hasIcon ? "" : "ml-2.5"
            }`}
          >
            {item.name}
          </span>

          {hasChildren && !collapsed && (
            <DownOutlined
              className={`mr-3 ml-auto text-[10px] text-stone-400 transition-transform duration-200 ${
                isOpen ? "rotate-0" : "-rotate-90"
              }`}
            />
          )}
        </button>
      </Tooltip>

      {hasChildren && (
        <div
          className={`grid overflow-hidden transition-all duration-300 ${
            isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
          }`}
        >
          <div className="min-h-0">
            <div className="relative ml-6.75 flex flex-col">
              <span
                aria-hidden
                className="absolute top-0 bottom-5 left-0 w-px bg-stone-200"
              />

              {item.children.map((child) => (
                <div key={child.id} className="relative pl-4">
                  <span
                    aria-hidden
                    className="absolute top-1/2 left-0 h-px w-4 -translate-y-1/2 bg-stone-200"
                  />
                  <SidebarItem
                    item={child}
                    collapsed={collapsed}
                    depth={depth + 1}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
