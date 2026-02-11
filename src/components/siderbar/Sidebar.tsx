import elements from "../../mocs/Sidebar.json";
import { useState } from "react";
import { useRenderIcon } from "@/hooks/useRenderIcon";

export const Sidebar = () => {
  const { getIconByName } = useRenderIcon();
  const [current, setCurrent] = useState("chart");

  return (
    <div className="w-60 bg-neutral-50 shadow rounded p-3 flex flex-col gap-5 font-outfit">
      <h1 className="text-5xl font-extrabold text-center font-dance text-teal-500">
        Arise
      </h1>
      <section className="size-full">
        {elements.map((element) => (
          <article>
            <span className="text-[11px] text-neutral-600/60 uppercase font-medium">
              {element.title}
            </span>
            <ul className="mt-3 flex flex-col gap-2">
              {element.items.map((it) => (
                <div
                  className={`flex transition-all rounded items-center cursor-pointer group hover:bg-teal-600/15 p-2 gap-2`}
                  onClick={() => {
                    setCurrent(it.icon);
                    // navigate(it.url);
                  }}
                >
                  {getIconByName(
                    it.icon,
                    "group-hover:text-teal-500 group-hover:fill-teal-500 size-5 text-neutral-600 transition-all",
                  )?.icon ?? true}
                  <li className="transition-all font-medium group-hover:text-teal-700 text-neutral-600">
                    {it.name}
                  </li>
                </div>
              ))}
            </ul>
          </article>
        ))}
      </section>
    </div>
  );
};
