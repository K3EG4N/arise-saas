import { Switch } from "./Switch";
import { Input } from "./Input";
import { Searcher } from "@/icons/Regular/Search";
import type { ICustomizable } from "@/interfaces/ICustomizable";
import { Button } from "./Button";
import { useRenderIcon } from "@/hooks/useRenderIcon";
import { useState } from "react";

export const Customizable = <T,>({ columns }: ICustomizable<T>) => {
  const [active, setActive] = useState(false);
  const { getIconByName } = useRenderIcon();

  return (
    <div className="relative" onClick={() => setActive(!active)}>
      <Button
        appareance="ghost"
        icon={getIconByName("customize")?.icon}
        label={"Customize"}
      />
      {active && (
        <div className="absolute right-5 -bottom-[1150%] z-50 flex w-65 flex-col gap-4 rounded-lg border border-gray-200 bg-white px-4 py-4 shadow">
          <h1 className="font-medium">Customize Columns</h1>
          <Input placeholder="Search" icon={<Searcher />} />
          {columns.map((it, ix) => (
            <div key={ix} className="flex justify-between">
              <div className="flex cursor-pointer items-center gap-1.5">
                {/* <Grabber /> */}
                <span className="text-sm">{it.name}</span>
              </div>
              <Switch
                active={it.visible === undefined || it.visible === true}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
