import elements from "../../mocs/Sidebar.json";
import { useEffect, useState } from "react";
import { useRenderIcon } from "@/hooks/useRenderIcon";
import { useLocation, useNavigate } from "react-router-dom";

export const Sidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { getIconByName } = useRenderIcon();
  const [current, setCurrent] = useState(location?.state?.id);

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

  return (
    <div className="font-outfit flex w-60 flex-col gap-5 rounded bg-neutral-50 p-3 shadow">
      <h1 className="font-dance text-center text-5xl font-extrabold text-teal-500">
        Arise
      </h1>
      <section className="size-full">
        {elements.map((element) => (
          <article key={element.title}>
            <span className="text-[11px] font-medium text-neutral-600/60 uppercase">
              {element.title}
            </span>
            <ul className="mt-3 flex flex-col gap-2">
              {element.items.map((it) => {
                const isSelected = current === it.id;
                return (
                  <div
                    key={it.id}
                    className={`group flex cursor-pointer items-center gap-2 rounded p-2 transition-all hover:bg-teal-600/15 ${
                      isSelected ? "bg-teal-600/15" : ""
                    }`}
                    onClick={() => {
                      setCurrent(it.id);
                      navigate(it.url, getRoutePath(it.id));
                    }}
                  >
                    {getIconByName(
                      it.icon,
                      `size-5 transition-all ${
                        isSelected
                          ? "text-teal-500 fill-teal-500"
                          : "text-neutral-600 group-hover:text-teal-500 group-hover:fill-teal-500"
                      }`,
                    )?.icon ?? true}
                    <li
                      className={`font-medium transition-all ${
                        isSelected
                          ? "text-teal-700"
                          : "text-neutral-600 group-hover:text-teal-700"
                      }`}
                    >
                      {it.name}
                    </li>
                  </div>
                );
              })}
            </ul>
          </article>
        ))}
      </section>
    </div>
  );
};
