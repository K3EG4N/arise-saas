import { Chart } from "@/icons/Fill/Chart";
import { Users } from "@/icons/Fill/Users";
import { Customize } from "@/icons/Regular/Customize";
import { Download } from "@/icons/Regular/Download";
import { Filter } from "@/icons/Regular/Filter";
import { Plus } from "@/icons/Regular/Plus";
import { Refresh } from "@/icons/Regular/Refresh";
import { Searcher } from "@/icons/Regular/Search";
import { cloneElement } from "react";

export const useRenderIcon = () => {
  const icons = [
    {
      name: "employees",
      icon: <Users />,
    },
    {
      name: "chart",
      icon: <Chart />,
    },
    {
      name: "refresh",
      icon: <Refresh />,
    },
    {
      name: "searcher",
      icon: <Searcher />,
    },
    {
      name: "customize",
      icon: <Customize />,
    },
    {
      name: "download",
      icon: <Download />,
    },
    {
      name: "filter",
      icon: <Filter />,
    },
    {
      name: "add",
      icon: <Plus />,
    },
  ];

  const getIconByName = (name: string, className?: string) => {
    const iconData = icons.find((it) => it.name === name);

    if (!iconData) return null;

    return {
      ...iconData,
      icon: className
        ? cloneElement(iconData.icon, { className })
        : iconData.icon,
    };
  };

  return { getIconByName };
};
