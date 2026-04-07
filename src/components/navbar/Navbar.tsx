import { Search } from "./fragments/Searcher";
import { useLocation } from "react-router-dom";
import { BreadCrum, useRenderIcon } from "arise-ui";
import { Notifications } from "./fragments/Notifactions";
import { useState } from "react";

export const Navbar = () => {
  const location = useLocation();
  const { getIconByName } = useRenderIcon();
  const [isHovered, setIsHovered] = useState(false);

  return (
    <header className="flex h-fit items-center justify-between gap-4 rounded bg-neutral-50 px-4 py-2 shadow dark:bg-neutral-900">
      <div className="w-fit">
        <BreadCrum items={["Main", location?.state?.route]} />
      </div>
      <section className="flex h-full min-w-0 items-center gap-3.5">
        <div className="w-80">
          <Search />
        </div>
        <Notifications />
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {
            getIconByName(
              "message",
              "size-5 text-neutral-600 hover:fill-teal-500 cursor-pointer",
              isHovered,
            )?.icon
          }
        </div>
      </section>
    </header>
  );
};
