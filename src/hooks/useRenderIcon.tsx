import { Chart } from "@/icons/Fill/Chart";
import { Users } from "@/icons/Fill/Users";
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
